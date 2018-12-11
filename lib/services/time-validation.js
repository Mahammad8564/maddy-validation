"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var TimeValidation = /** @class */ (function () {
    function TimeValidation(question, format) {
        if (format === void 0) { format = "HH:mm"; }
        this.question = question;
        this.format = format;
    }
    TimeValidation.prototype.gt = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value, compareWith[0], 'isAfter', this.format);
            var message = this.question.message || this.question.title + " must be greater than " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.lt = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value, compareWith[0], 'isBefore', this.format);
            var message = this.question.message || this.question.title + " must be less than " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.lte = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value, compareWith[0], 'isSameOrBefore', this.format);
            var message = this.question.message || this.question.title + " must be less than or equal to " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.gte = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value, compareWith[0], 'isSameOrAfter', this.format);
            var message = this.question.message || this.question.title + " must be greater than or equal to " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.eq = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value, compareWith[0], 'isSame', this.format);
            var message = this.question.message || this.question.title + " must be equal to " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.notEqual = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (!validation_utils_1.ValidationUtils.validateDate(value, compareWith[0], 'isSame', this.format));
            var message = this.question.message || this.question.title + " must be not equal to " + moment(compareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.between = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (moment(moment(value).format(this.format), this.format).isBetween(moment(moment(compareWith[0])
                .format(this.format), this.format), moment(moment(compareWith[1]).format(this.format), this.format), null, '[]'));
            var message = this.question.message || this.question.title + " must be between " + moment(compareWith[0]).format(this.format) + " to " + moment(compareWith[1]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeValidation.prototype.notBetween = function (value, compareWith) {
        if (validation_utils_1.ValidationUtils.returnNull(compareWith)) {
            var result = (!(moment(moment(value).format(this.format), this.format)
                .isBetween(moment(moment(compareWith[0]).format(this.format), this.format), moment(moment(compareWith[1]).format(this.format), this.format))));
            var message = this.question.message || this.question.title + " must be not between " + moment(compareWith[0]).format(this.format) + " to " + moment(compareWith[1]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    return TimeValidation;
}());
exports.TimeValidation = TimeValidation;
