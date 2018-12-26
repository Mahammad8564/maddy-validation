export class FieldValidation {
    public title: string;
    public type: string;
    public condition: string;
    public currentValue: any;
    public message: string;
    public params: Array<any> = [];
    public uid?: string;
    public required?: boolean;
    constructor(question: any, group?: any) {
        this.title = question.title || '';
        this.type = question.type.name || question.type;
        this.condition = question.condition || ((question.validation || {}).condition || {}).type || '';
        this.currentValue = question.currentValue || group[question.uid] || group.controls[question.uid].value || '';
        this.params = question.params || [];
        this.message = question.message || ((question.validation || {}).condition || {}).message || '';
        this.required = question.required || question.validation.required.enabled || false;
    }

    setParams(value: any) {
        if (value || value == 0) {
            this.params.push(value);
        }
    }

    setInput(value) {
        this.currentValue = value
    }

}

export class FieldValidationMessage {
    result: boolean;
    message: string;
    constructor(validation) {
        this.result = validation.result;
        this.message = validation.message;
    }
}

export class SectionLunchCondition {
    public title: string;
    public type: string;
    public bool:string;
    public condition: string;
    public currentValue: any;
    public message: string;
    public params: Array<any> = [];
    public uid?: string  ;
    public required?: boolean;
    constructor(question,group) {
        this.type = question.coondtion;
        this.currentValue = question.leftOprator  || '';
        this.condition = question.comparison;
        this.bool=question.bool;
        this.params=[question.rightOperand];
        this.uid=question.uid 
        this.required = question.required   || false;

    }
}