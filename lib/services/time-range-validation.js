"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var TimeRangeValidation = /** @class */ (function () {
    function TimeRangeValidation(question, format) {
        if (format === void 0) { format = "HH:mm"; }
        this.question = question;
        this.format = format;
    }
    TimeRangeValidation.prototype.gt = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isAfter', this.format)
                && validation_utils_1.ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isAfter', this.format);
            var message = this.question.message || this.question.title + " must be greater than  " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.lt = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isBefore', this.format) &&
                validation_utils_1.ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isBefore', this.format);
            var message = this.question.message || this.question.title + " must be less than  " + moment(tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.lte = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSameOrBefore', this.format)
                && validation_utils_1.ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSameOrBefore', this.format);
            var message = this.question.message || this.question.title + " must be less than or equal to " + moment(tmpCompareWith[0]).format(this.format) + "  ";
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.gte = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSameOrAfter', this.format)
                && validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSameOrAfter', this.format);
            var message = this.question.message || this.question.title + " must be greater than or equal to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.eq = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSame', this.format)
                && validation_utils_1.ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSame', this.format);
            var message = this.question.message || this.question.title + " must be equal to " + moment(tmpCompareWith[0]
                || tmpCompareWith[1]).format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.notEqual = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (!validation_utils_1.ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSame', this.format))
                && (!validation_utils_1.ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSame', this.format));
            var message = this.question.message || this.question.title + " must be not equal to " + moment(tmpCompareWith[0]
                || tmpCompareWith[1]).format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.between = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(moment(value[0]).format(this.format), this.format)
                .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1]).format(this.format), this.format)))
                && (moment(moment(value[1]).format(this.format), this.format)
                    .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1]).format(this.format), this.format)));
            var message = this.question.message || this.question.title + " must be between " + moment(tmpCompareWith[0]).format(this.format) + " to " + moment(tmpCompareWith[1]
                || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    TimeRangeValidation.prototype.notBetween = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (!(moment(moment(value[0]).format(this.format), this.format)
                .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1])
                .format(this.format), this.format))) && (moment(moment(value[1]).format(this.format), this.format)
                .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1]).format(this.format), this.format))));
            var message = this.question.message || this.question.title + " must be not between " + moment(tmpCompareWith[1] || tmpCompareWith[0])
                .format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: false, message: '' };
    };
    return TimeRangeValidation;
}());
exports.TimeRangeValidation = TimeRangeValidation;
