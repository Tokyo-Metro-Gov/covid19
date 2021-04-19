// To parse this data:
//
//   import { Convert, Data } from "./file";
//
//   const data = Convert.toData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Data {
    contacts:           Contacts;
    querents:           Querents;
    patientsSummary:    PatientsSummary;
    inspectionsSummary: InspectionsSummary;
    lastUpdate:         string;
    mainSummary:        MainSummary;
}

export interface Contacts {
    date: string;
    data: ContactsDatum[];
}

export interface ContactsDatum {
    日付:       Date;
    曜日:       曜日;
    the913時:  number;
    the1317時: number;
    the1721時: number;
    date:     Date;
    w:        number;
    小計:       number;
}

export enum 曜日 {
    土 = "土",
    日 = "日",
    月 = "月",
    木 = "木",
    水 = "水",
    火 = "火",
    金 = "金",
}

export interface InspectionsSummary {
    date:   string;
    data:   { [key: string]: number[] };
    labels: Date[];
}

export interface MainSummary {
    children: MainSummaryChild[];
}

export interface MainSummaryChild {
    attr:     string;
    date:     string;
    value:    number;
    children: PurpleChild[];
}

export interface PurpleChild {
    attr:      string;
    value:     number;
    children?: FluffyChild[];
}

export interface FluffyChild {
    attr:  string;
    value: number;
}

export interface PatientsSummary {
    date: string;
    data: PatientsSummaryDatum[];
}

export interface PatientsSummaryDatum {
    日付: Date;
    小計: number;
}

export interface Querents {
    date: string;
    data: QuerentsDatum[];
}

export interface QuerentsDatum {
    日付:       Date;
    曜日:       曜日;
    the917時:  number;
    the17翌9時: number;
    the７日間平均: number | null;
    date:     Date;
    w:        number;
    小計:       number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toData(json: string): Data {
        return cast(JSON.parse(json), r("Data"));
    }

    public static dataToJson(value: Data): string {
        return JSON.stringify(uncast(value, r("Data")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Data": o([
        { json: "contacts", js: "contacts", typ: r("Contacts") },
        { json: "querents", js: "querents", typ: r("Querents") },
        { json: "patients_summary", js: "patientsSummary", typ: r("PatientsSummary") },
        { json: "inspections_summary", js: "inspectionsSummary", typ: r("InspectionsSummary") },
        { json: "lastUpdate", js: "lastUpdate", typ: "" },
        { json: "main_summary", js: "mainSummary", typ: r("MainSummary") },
    ], false),
    "Contacts": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("ContactsDatum")) },
    ], false),
    "ContactsDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "曜日", js: "曜日", typ: r("曜日") },
        { json: "9-13時", js: "the913時", typ: 0 },
        { json: "13-17時", js: "the1317時", typ: 0 },
        { json: "17-21時", js: "the1721時", typ: 0 },
        { json: "date", js: "date", typ: Date },
        { json: "w", js: "w", typ: 0 },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
    "InspectionsSummary": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: m(a(0)) },
        { json: "labels", js: "labels", typ: a(Date) },
    ], false),
    "MainSummary": o([
        { json: "children", js: "children", typ: a(r("MainSummaryChild")) },
    ], false),
    "MainSummaryChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: a(r("PurpleChild")) },
    ], false),
    "PurpleChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: u(undefined, a(r("FluffyChild"))) },
    ], false),
    "FluffyChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "PatientsSummary": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("PatientsSummaryDatum")) },
    ], false),
    "PatientsSummaryDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
    "Querents": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("QuerentsDatum")) },
    ], false),
    "QuerentsDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "曜日", js: "曜日", typ: r("曜日") },
        { json: "9-17時", js: "the917時", typ: 0 },
        { json: "17-翌9時", js: "the17翌9時", typ: 0 },
        { json: "７日間平均", js: "the７日間平均", typ: u(0, null) },
        { json: "date", js: "date", typ: Date },
        { json: "w", js: "w", typ: 0 },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
    "曜日": [
        "土",
        "日",
        "月",
        "木",
        "水",
        "火",
        "金",
    ],
};
