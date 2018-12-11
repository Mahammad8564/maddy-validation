"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberValidationService = /** @class */ (function () {
    function NumberValidationService(question) {
        this.question = question;
    }
    NumberValidationService.prototype.gt = function (value, compareWith) {
        var result = (parseFloat(value) > parseFloat(compareWith[0]));
        var message = this.question.message || this.question.title + " must be greater than " + parseFloat(compareWith[0]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.lt = function (value, compareWith) {
        var result = (parseFloat(value) < parseFloat(compareWith[0]));
        var message = this.question.message || this.question.title + " must be less than " + parseFloat(compareWith[0]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.lte = function (value, compareWith) {
        var result = (parseFloat(value) <= parseFloat(compareWith[0]));
        var message = this.question.message || this.question.title + " must be less than or equal to " + parseFloat(compareWith[0]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.gte = function (value, compareWith) {
        var result = (parseFloat(value) >= parseFloat(compareWith[0]));
        var message = this.question.message || this.question.title + " must be greater than or equal to " + parseFloat(compareWith[0]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.eq = function (value, compareWith) {
        var result = (parseFloat(value) == parseFloat(compareWith[0]));
        var message = this.question.message || this.question.title + " must be equal to " + parseFloat(compareWith[0]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.notEqual = function (value, compareWith) {
        var result = (parseFloat(value) != parseFloat(compareWith[0]));
        var message = this.question.message || this.question.title + " must be not equal to " + parseFloat(compareWith[0]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.between = function (value, compareWith) {
        var result = ((parseFloat(value) > parseFloat(compareWith[0])) && (parseFloat(value) < parseFloat(compareWith[1])));
        var message = this.question.message || this.question.title + " must be between " + parseFloat(compareWith[0]) + " to " + (compareWith[1]);
        return { result: result, message: message };
    };
    NumberValidationService.prototype.notBetween = function (value, compareWith) {
        var result = (!((parseFloat(value) >= parseFloat(compareWith[0])) && (parseFloat(value) <= parseFloat(compareWith[1]))));
        var message = this.question.message || this.question.title + " must be not between " + parseFloat(compareWith[0]) + " to " + (compareWith[1]);
        return { result: result, message: message };
    };
    return NumberValidationService;
}());
exports.NumberValidationService = NumberValidationService;
