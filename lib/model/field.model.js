"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldValidation = /** @class */ (function () {
    function FieldValidation(question, group) {
        this.params = [];
        this.title = question.title;
        this.type = question.type.name || question.type;
        this.condition = question.condition || question.validation.condition.type;
        this.currentValue = question.currentValue || group.controls[question.uid].value;
        this.params = question.params || [];
        this.message = question.message || question.validation.condition.message || '';
    }
    FieldValidation.prototype.setParams = function (value) {
        if (value || value == 0) {
            this.params.push(value);
        }
    };
    return FieldValidation;
}());
exports.FieldValidation = FieldValidation;
