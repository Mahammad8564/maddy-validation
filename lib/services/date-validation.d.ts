export declare class DateValidation {
    question: any;
    format: any;
    constructor(question: any, format?: string);
    gt(value: any, compareWith: Array<any>): {
        result: any;
        message: any;
    };
    lt(value: any, compareWith: any): {
        result: any;
        message: any;
    };
    lte(value: any, compareWith: any): {
        result: any;
        message: any;
    };
    gte(value: any, compareWith: any): {
        result: any;
        message: any;
    };
    eq(value: any, compareWith: any): {
        result: any;
        message: any;
    };
    notEqual(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    between(value: any, compareWith: any): {
        result: any;
        message: any;
    };
    notBetween(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
}
