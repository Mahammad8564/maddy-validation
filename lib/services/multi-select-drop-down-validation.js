"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var MultiSelectDropDownValidation = /** @class */ (function () {
    function MultiSelectDropDownValidation(question) {
        this.question = question;
    }
    MultiSelectDropDownValidation.prototype.gt = function (value, compareWith) {
        var result = (value.length > validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]));
        var message = this.question.message || this.question.title + " must have greater than " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " selected value(s)";
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.lt = function (value, compareWith) {
        var result = (value.length < validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]));
        var message = this.question.message || this.question.title + " must have less than " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " selected value(s)";
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.lte = function (value, compareWith) {
        var result = (value.length <= validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]));
        var message = this.question.message || this.question.title + " must have less than or equal to " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " selected value(s)";
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.gte = function (value, compareWith) {
        var result = (value.length >= validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]));
        var message = this.question.message || this.question.title + " must have greater than or equal to " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " selected value(s)";
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.eq = function (value, compareWith) {
        var result = (value.length == validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]));
        var message = this.question.message || this.question.title + " must have " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " selected value(s)";
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.notEqual = function (value, compareWith) {
        var result = (value.length != validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]));
        var message = this.question.message || this.question.title + " must not have " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " selected value(s)";
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.between = function (value, compareWith) {
        var result = ((value > validation_utils_1.ValidationUtils.checkIsArray(compareWith[0])) && (value.length < validation_utils_1.ValidationUtils.checkIsArray(compareWith[1])));
        var message = this.question.message || this.question.title + " must have number of value(s) selected between " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " to " + (compareWith[1]);
        return { result: result, message: message };
    };
    MultiSelectDropDownValidation.prototype.notBetween = function (value, compareWith) {
        var result = (!((value >= validation_utils_1.ValidationUtils.checkIsArray(compareWith[0])) && (value.length <= validation_utils_1.ValidationUtils.checkIsArray(compareWith[1]))));
        var message = this.question.message || this.question.title + " must not have number of selected value(s) between " + validation_utils_1.ValidationUtils.checkIsArray(compareWith[0]) + " to " + (compareWith[1]);
        return { result: result, message: message };
    };
    return MultiSelectDropDownValidation;
}());
exports.MultiSelectDropDownValidation = MultiSelectDropDownValidation;
