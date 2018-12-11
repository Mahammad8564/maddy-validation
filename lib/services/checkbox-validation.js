"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var CheckboxValidation = /** @class */ (function () {
    function CheckboxValidation(question) {
        this.question = question;
    }
    CheckboxValidation.prototype.gt = function (value, compareWith) {
        var result = (validation_utils_1.ValidationUtils.arrayLength(value) > compareWith[0]);
        var message = this.question.message || this.question.title + " must have greater than " + compareWith[0] + " option(s) selected";
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.lt = function (value, compareWith) {
        var result = (validation_utils_1.ValidationUtils.arrayLength(value) < compareWith[0]);
        var message = this.question.message || this.question.title + " must have less than " + compareWith[0] + " option(s) selected";
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.lte = function (value, compareWith) {
        var result = (validation_utils_1.ValidationUtils.arrayLength(value) <= compareWith[0]);
        var message = this.question.message || this.question.title + " must have less than or equal to " + compareWith[0] + " option(s) selected";
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.gte = function (value, compareWith) {
        var result = (validation_utils_1.ValidationUtils.arrayLength(value) >= compareWith[0]);
        var message = this.question.message || this.question.title + " must have greater than or equal to " + compareWith[0] + " option(s) selected";
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.eq = function (value, compareWith) {
        var result = (validation_utils_1.ValidationUtils.arrayLength(value) == compareWith[0]);
        var message = this.question.message || this.question.title + " must have " + compareWith[0] + " option(s) selected";
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.notEqual = function (value, compareWith) {
        var result = (validation_utils_1.ValidationUtils.arrayLength(value) != compareWith[0]);
        var message = this.question.message || this.question.title + " must not have " + compareWith[0] + " option(s) selected";
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.between = function (value, compareWith) {
        var result = ((value > compareWith[0]) && (validation_utils_1.ValidationUtils.arrayLength(value) < compareWith[1]));
        var message = this.question.message || this.question.title + " must have number of selected options between " + compareWith[0] + " to " + (compareWith[1]);
        return { result: result, message: message };
    };
    CheckboxValidation.prototype.notBetween = function (value, compareWith) {
        var result = (!((value >= compareWith[0]) && (validation_utils_1.ValidationUtils.arrayLength(value) <= compareWith[1])));
        var message = this.question.message || this.question.title + " must not have number of selected options between " + compareWith[0] + " to " + (compareWith[1]);
        return { result: result, message: message };
    };
    return CheckboxValidation;
}());
exports.CheckboxValidation = CheckboxValidation;
