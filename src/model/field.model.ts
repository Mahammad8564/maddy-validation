import { FormGroup } from "@angular/forms";


export class FieldValidation {
    public title: string;
    public type: string;
    public condition: string;
    public currentValue: any;
    public message: string;
    public params: Array<any> = [];

    constructor(question, group?: FormGroup) {
        this.title = question.title;
        this.type = question.type.name || question.type;
        this.condition = question.condition || question.validation.condition.type;
        this.currentValue = question.currentValue || group.controls[question.uid].value;
        this.params = question.params || [];
        this.message = question.message || question.validation.condition.message || '';
    }

    setParams(value) {
        if (value || value == 0) {
            this.params.push(value)
        }
    }

}

