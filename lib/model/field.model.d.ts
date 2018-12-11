import { FormGroup } from "@angular/forms";
export declare class FieldValidation {
    private title;
    private type;
    private condition;
    private currentValue;
    private message;
    private params;
    constructor(question: any, group?: FormGroup);
    setParams(value: any): void;
}
