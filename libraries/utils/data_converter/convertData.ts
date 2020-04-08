// To parse this data:
//
//   import { Convert, Data } from "./file";
//
//   const data = Convert.toData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Data {
    contacts:                  Contacts;
    querents:                  Querents;
    patients:                  Patients;
    patients_summary:          SSummary;
    discharges_summary:        SSummary;
    inspections_summary:       InspectionsSummary;
    inspection_persons:        InspectionPersons;
    inspection_status_summary: InspectionStatusSummary;
    lastUpdate:                string;
    main_summary:              MainSummary;
}

export interface Contacts {
    date: string;
    data: ContactsDatum[];
}

export interface ContactsDatum {
    日付:         Date;
    曜日:         number | string;
    "9-13時":    number;
    "13-17時":   number;
    "17-21時":   number;
    date:       Date;
    w:          number;
    short_date: string;
    小計:         number;
}

export interface SSummary {
    date: string;
    data: DischargesSummaryDatum[];
}

export interface DischargesSummaryDatum {
    日付: Date;
    小計: number;
}

export interface InspectionPersons {
    date:     string;
    labels:   Date[];
    datasets: Dataset[];
}

export interface Dataset {
    label: string;
    data:  number[];
}

export interface InspectionStatusSummary {
    date:     string;
    attr:     string;
    value:    number;
    children: InspectionStatusSummaryChild[];
}

export interface InspectionStatusSummaryChild {
    attr:      string;
    value:     number;
    children?: PurpleChild[];
}

export interface PurpleChild {
    attr:  string;
    value: number;
}

export interface InspectionsSummary {
    date:   string;
    data:   DataClass;
    labels: string[];
}

export interface DataClass {
    都内:  number[];
    その他: number[];
}

export interface MainSummary {
    attr:     string;
    value:    number;
    children: MainSummaryChild[];
}

export interface MainSummaryChild {
    attr:     string;
    value:    number;
    children: InspectionStatusSummaryChild[];
}

export interface Patients {
    date: string;
    data: PatientsDatum[];
}

export interface PatientsDatum {
    リリース日: Date;
    居住地:   居住地 | null;
    年代:    年代;
    性別:    性別;
    退院:    退院 | null;
    date:  Date;
}

export enum 居住地 {
    Empty = "-",
    Purple = "―",
    埼玉県 = "埼玉県",
    居住地_ = "‐",
    湖北省武漢市 = "湖北省武漢市",
    湖南省長沙市 = "湖南省長沙市",
    調査中 = "調査中",
    都内 = "都内",
    都外 = "都外",
}

export enum 年代 {
    The10代 = "10代",
    The10歳未満 = "10歳未満",
    The20代 = "20代",
    The30代 = "30代",
    The40代 = "40代",
    The50代 = "50代",
    The60代 = "60代",
    The70代 = "70代",
    The80代 = "80代",
    The90代 = "90代",
    調査中 = "調査中",
}

export enum 性別 {
    女性 = "女性",
    男 = "男",
    男性 = "男性",
    調査中 = "調査中",
}

export enum 退院 {
    Empty = "〇",
}

export interface Querents {
    date: string;
    data: QuerentsDatum[];
}

export interface QuerentsDatum {
    日付:         Date;
    曜日:         number | string;
    "9-17時":    number;
    "17-翌9時":   number;
    date:       Date;
    w:          number;
    short_date: string;
    小計:         number;
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

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
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

    function transformDate(typ: any, val: any): any {
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
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
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
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
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
        { json: "patients", js: "patients", typ: r("Patients") },
        { json: "patients_summary", js: "patients_summary", typ: r("SSummary") },
        { json: "discharges_summary", js: "discharges_summary", typ: r("SSummary") },
        { json: "inspections_summary", js: "inspections_summary", typ: r("InspectionsSummary") },
        { json: "inspection_persons", js: "inspection_persons", typ: r("InspectionPersons") },
        { json: "inspection_status_summary", js: "inspection_status_summary", typ: r("InspectionStatusSummary") },
        { json: "lastUpdate", js: "lastUpdate", typ: "" },
        { json: "main_summary", js: "main_summary", typ: r("MainSummary") },
    ], false),
    "Contacts": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("ContactsDatum")) },
    ], false),
    "ContactsDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "曜日", js: "曜日", typ: u(0, "") },
        { json: "9-13時", js: "9-13時", typ: 0 },
        { json: "13-17時", js: "13-17時", typ: 0 },
        { json: "17-21時", js: "17-21時", typ: 0 },
        { json: "date", js: "date", typ: Date },
        { json: "w", js: "w", typ: 0 },
        { json: "short_date", js: "short_date", typ: "" },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
    "SSummary": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("DischargesSummaryDatum")) },
    ], false),
    "DischargesSummaryDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
    "InspectionPersons": o([
        { json: "date", js: "date", typ: "" },
        { json: "labels", js: "labels", typ: a(Date) },
        { json: "datasets", js: "datasets", typ: a(r("Dataset")) },
    ], false),
    "Dataset": o([
        { json: "label", js: "label", typ: "" },
        { json: "data", js: "data", typ: a(0) },
    ], false),
    "InspectionStatusSummary": o([
        { json: "date", js: "date", typ: "" },
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: a(r("InspectionStatusSummaryChild")) },
    ], false),
    "InspectionStatusSummaryChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: u(undefined, a(r("PurpleChild"))) },
    ], false),
    "PurpleChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "InspectionsSummary": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: r("DataClass") },
        { json: "labels", js: "labels", typ: a("") },
    ], false),
    "DataClass": o([
        { json: "都内", js: "都内", typ: a(0) },
        { json: "その他", js: "その他", typ: a(0) },
    ], false),
    "MainSummary": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: a(r("MainSummaryChild")) },
    ], false),
    "MainSummaryChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: a(r("InspectionStatusSummaryChild")) },
    ], false),
    "Patients": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("PatientsDatum")) },
    ], false),
    "PatientsDatum": o([
        { json: "リリース日", js: "リリース日", typ: Date },
        { json: "居住地", js: "居住地", typ: u(r("居住地"), null) },
        { json: "年代", js: "年代", typ: r("年代") },
        { json: "性別", js: "性別", typ: r("性別") },
        { json: "退院", js: "退院", typ: u(r("退院"), null) },
        { json: "date", js: "date", typ: Date },
    ], false),
    "Querents": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("QuerentsDatum")) },
    ], false),
    "QuerentsDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "曜日", js: "曜日", typ: u(0, "") },
        { json: "9-17時", js: "9-17時", typ: 0 },
        { json: "17-翌9時", js: "17-翌9時", typ: 0 },
        { json: "date", js: "date", typ: Date },
        { json: "w", js: "w", typ: 0 },
        { json: "short_date", js: "short_date", typ: "" },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
    "居住地": [
        "-",
        "―",
        "埼玉県",
        "‐",
        "湖北省武漢市",
        "湖南省長沙市",
        "調査中",
        "都内",
        "都外",
    ],
    "年代": [
        "10代",
        "10歳未満",
        "20代",
        "30代",
        "40代",
        "50代",
        "60代",
        "70代",
        "80代",
        "90代",
        "調査中",
    ],
    "性別": [
        "女性",
        "男",
        "男性",
        "調査中",
    ],
    "退院": [
        "〇",
    ],
};
