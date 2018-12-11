export declare class MultiSelectDropDownValidation {
    question: any;
    constructor(question: any);
    gt(value: Array<any>, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    lt(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    lte(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    gte(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    eq(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    notEqual(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    between(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
    notBetween(value: any, compareWith: any): {
        result: boolean;
        message: any;
    };
}
