"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var DateValidation = /** @class */ (function () {
    function DateValidation(question, format) {
        if (format === void 0) { format = "MM/DD/YYYY"; }
        this.question = question;
        this.format = format;
    }
    DateValidation.prototype.gt = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(value).isAfter(compareWith[0]));
            var message = this.question.message || this.question.title + " must have greater than " + moment(compareWith[0]).format(this.format) + " " + this.question.type;
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.lt = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(value).isBefore(compareWith[0]));
            var message = this.question.message || this.question.title + " must have less than " + moment(compareWith[0]).format(this.format) + " " + this.question.type;
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.lte = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(value).isSameOrBefore(compareWith[0]));
            var message = this.question.message || this.question.title + " must have less than or equal to " + moment(compareWith[0]).format(this.format) + " date";
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.gte = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(value).isSameOrAfter(compareWith[0]));
            var message = this.question.message || this.question.title + " must have greater than or equal to " + moment(compareWith[0]).format(this.format) + " date";
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.eq = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(value).isSame(compareWith[0]));
            var message = this.question.message || this.question.title + " must be equal to " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.notEqual = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (!(moment(value).isSame(compareWith[0])));
            var message = this.question.message || this.question.title + " must not be equal to " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.between = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(value).isBetween(compareWith[0], compareWith[1], null, '[]'));
            var message = this.question.message || this.question.title + " must have " + this.question.type + " between " + moment(compareWith[0]).format(this.format) + " to " + moment(compareWith[1]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateValidation.prototype.notBetween = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (!(moment(value).isBetween(compareWith[0], compareWith[1])));
            var message = this.question.message || this.question.title + " must not have " + this.question.type + " between " + moment(compareWith[0]).format(this.format) + " to " + moment(compareWith[1]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    return DateValidation;
}());
exports.DateValidation = DateValidation;
