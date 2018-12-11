"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var TextValidation = /** @class */ (function () {
    function TextValidation(question) {
        this.question = question;
    }
    TextValidation.prototype.gt = function (value, compareWith) {
        var compareValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var result = (value.length > compareValue);
        var message = this.question.message || this.question.title + " must be greater than " + compareValue;
        return { result: result, message: message };
    };
    TextValidation.prototype.lt = function (value, compareWith) {
        var compareValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var result = (value.length < compareValue);
        var message = this.question.message || this.question.title + " must be less than " + compareValue;
        return { result: result, message: message };
    };
    TextValidation.prototype.lte = function (value, compareWith) {
        var compareValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var result = (value.length <= compareValue);
        var message = this.question.message || this.question.title + " must be less than or equal to " + compareValue;
        return { result: result, message: message };
    };
    TextValidation.prototype.gte = function (value, compareWith) {
        var compareValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var result = (value.length >= compareValue);
        var message = this.question.message || this.question.title + " must be greater than or equal to " + compareValue;
        return { result: result, message: message };
    };
    TextValidation.prototype.eq = function (value, compareWith) {
        var compareValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var result = (value.length == compareValue);
        var message = this.question.message || this.question.title + " must be equal to " + compareValue;
        return { result: result, message: message };
    };
    TextValidation.prototype.notEqual = function (value, compareWith) {
        var compareValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var result = (value.length != compareValue);
        var message = this.question.message || this.question.title + " must be not equal to " + compareWith[0];
        return { result: result, message: message };
    };
    TextValidation.prototype.between = function (value, compareWith) {
        var firstValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var secondValue = validation_utils_1.ValidationUtils.toNumber(compareWith[1]);
        var result = ((value.length > firstValue) && (value.length < secondValue));
        var message = this.question.message || this.question.title + " must be between " + firstValue + " to " + secondValue;
        return { result: result, message: message };
    };
    TextValidation.prototype.notBetween = function (value, compareWith) {
        var firstValue = validation_utils_1.ValidationUtils.toNumber(compareWith[0]);
        var secondValue = validation_utils_1.ValidationUtils.toNumber(compareWith[1]);
        var result = (!((value.length >= firstValue) && (value.length <= secondValue)));
        var message = this.question.message || this.question.title + " must be not between " + firstValue + " to " + secondValue;
        return { result: result, message: message };
    };
    ;
    TextValidation.prototype.sameAs = function (value, compareWith) {
        var result = (value == compareWith[0]);
        var message = this.question.message || this.question.title + " must be equal to " + compareWith[0];
        return { result: result, message: message };
    };
    ;
    TextValidation.prototype.notSame = function (value, compareWith) {
        var result = (value != compareWith[0]);
        var message = this.question.message || this.question.title + " must be equal to " + compareWith[0];
        return { result: result, message: message };
    };
    ;
    TextValidation.prototype.contains = function (value, compareWith) {
        var result = (value.includes(compareWith[0]));
        var message = this.question.message || this.question.title + " must contain " + compareWith[0];
        return { result: result, message: message };
    };
    TextValidation.prototype.notContains = function (value, compareWith) {
        var result = (!(value.includes(compareWith[0])));
        var message = this.question.message || this.question.title + " must not contain " + compareWith[0];
        return { result: result, message: message };
    };
    TextValidation.prototype.startwith = function (value, compareWith) {
        var result = ((compareWith[0]).startsWith(value));
        var message = this.question.message || this.question.title + " must be start with " + compareWith[0];
        return { result: result, message: message };
    };
    ;
    TextValidation.prototype.endswith = function (value, compareWith) {
        var result = (compareWith[0].endsWith(value));
        var message = this.question.message || this.question.title + " must ends with " + compareWith[0];
        return { result: result, message: message };
    };
    ;
    return TextValidation;
}());
exports.TextValidation = TextValidation;
