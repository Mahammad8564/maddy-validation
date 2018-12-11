export declare class TextValidation {
    question: any;
    constructor(question: any);
    gt(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    lt(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    lte(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    gte(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    eq(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    notEqual(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    between(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    notBetween(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    sameAs(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    notSame(value: any, compareWith: Array<any>): {
        result: boolean;
        message: any;
    };
    contains(value: any, compareWith: Array<string>): {
        result: any;
        message: any;
    };
    notContains(value: any, compareWith: Array<string>): {
        result: boolean;
        message: any;
    };
    startwith(value: any, compareWith: Array<string>): {
        result: any;
        message: any;
    };
    endswith(value: any, compareWith: Array<string>): {
        result: any;
        message: any;
    };
}
