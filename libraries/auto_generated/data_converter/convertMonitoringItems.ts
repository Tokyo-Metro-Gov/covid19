// To parse this data:
//
//   import { Convert, MonitoringItems } from "./file";
//
//   const monitoringItems = Convert.toMonitoringItems(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MonitoringItems {
    date: string;
    data: Data;
}

export interface Data {
    専門家3行コメント:                        専門家3行コメント[];
    the1新規陽性者数:                       number;
    the27119東京消防庁救急相談センターにおける発熱等相談件数: number;
    the3新規陽性者における接触歴等不明者人数:           number;
    the3新規陽性者における接触歴等不明者増加比:          number;
    the4Pcr抗原検査陽性率:                   number;
    the4Pcr抗原検査検査人数:                  number;
    the5救急医療の東京ルールの適用件数:              number;
    the6入院患者数:                        number;
    the6入院患者確保病床数:                    number;
    the7重症患者数:                        number;
    the7重症患者確保病床数:                    number;
    総括コメント感染状況:                       総括コメント;
    総括コメント医療提供体制:                     総括コメント;
}

export interface 専門家3行コメント {
    ja: string;
    en: string;
}

export interface 総括コメント {
    date:    Date;
    level:   number;
    display: 専門家3行コメント;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMonitoringItems(json: string): MonitoringItems {
        return cast(JSON.parse(json), r("MonitoringItems"));
    }

    public static monitoringItemsToJson(value: MonitoringItems): string {
        return JSON.stringify(uncast(value, r("MonitoringItems")), null, 2);
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
    "MonitoringItems": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: r("Data") },
    ], false),
    "Data": o([
        { json: "専門家3行コメント", js: "専門家3行コメント", typ: a(r("専門家3行コメント")) },
        { json: "(1)新規陽性者数", js: "the1新規陽性者数", typ: 3.14 },
        { json: "(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ", js: "the27119東京消防庁救急相談センターにおける発熱等相談件数", typ: 3.14 },
        { json: "(3)新規陽性者における接触歴等不明者（人数）", js: "the3新規陽性者における接触歴等不明者人数", typ: 3.14 },
        { json: "(3)新規陽性者における接触歴等不明者（増加比）", js: "the3新規陽性者における接触歴等不明者増加比", typ: 3.14 },
        { json: "(4)PCR・抗原検査（陽性率）", js: "the4Pcr抗原検査陽性率", typ: 3.14 },
        { json: "(4)PCR・抗原検査（検査人数）", js: "the4Pcr抗原検査検査人数", typ: 3.14 },
        { json: "(5)救急医療の東京ルールの適用件数", js: "the5救急医療の東京ルールの適用件数", typ: 3.14 },
        { json: "(6)入院患者数", js: "the6入院患者数", typ: 0 },
        { json: "(6)入院患者確保病床数", js: "the6入院患者確保病床数", typ: 0 },
        { json: "(7)重症患者数", js: "the7重症患者数", typ: 0 },
        { json: "(7)重症患者確保病床数", js: "the7重症患者確保病床数", typ: 0 },
        { json: "総括コメント-感染状況", js: "総括コメント感染状況", typ: r("総括コメント") },
        { json: "総括コメント-医療提供体制", js: "総括コメント医療提供体制", typ: r("総括コメント") },
    ], false),
    "専門家3行コメント": o([
        { json: "@ja", js: "ja", typ: "" },
        { json: "@en", js: "en", typ: "" },
    ], false),
    "総括コメント": o([
        { json: "date", js: "date", typ: Date },
        { json: "level", js: "level", typ: 0 },
        { json: "display", js: "display", typ: r("専門家3行コメント") },
    ], false),
};
