"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var validation_utils_1 = require("@app/core/validation/util/validation-utils");
var DateRangeValidation = /** @class */ (function () {
    function DateRangeValidation(question, format) {
        if (format === void 0) { format = "MM/DD/YYYY"; }
        this.question = question;
        this.format = format;
    }
    DateRangeValidation.prototype.gt = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(value[0]).isAfter(tmpCompareWith[0]) && moment(value[1]).isAfter((tmpCompareWith[1] || tmpCompareWith[0])));
            var message = this.question.message || this.question.title + " must be greater than  " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.lt = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(value[0]).isBefore((tmpCompareWith[0])) && moment(value[1]).isBefore((tmpCompareWith[1] || tmpCompareWith[0])));
            var message = this.question.message || this.question.title + " must be less than  " + moment(tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.lte = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(value[0]).isSameOrBefore((tmpCompareWith[0])) && moment(value[1]).isSameOrBefore((tmpCompareWith[1] || tmpCompareWith[0])));
            var message = this.question.message || this.question.title + " must be less than or equal to " + moment(tmpCompareWith[0]).format(this.format) + "  ";
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.gte = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(value[0]).isSameOrAfter((tmpCompareWith[0])) && moment(value[1]).isSameOrAfter((tmpCompareWith[1] || tmpCompareWith[0])));
            var message = this.question.message || this.question.title + " must be greater than or equal to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.eq = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(value[0]).isSame((tmpCompareWith[0])) && moment(value[1]).isSame((tmpCompareWith[1] || tmpCompareWith[0])));
            var message = this.question.message || this.question.title + " must be equal to " + moment(tmpCompareWith[0] || tmpCompareWith[1])
                .format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.notEqual = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (!(moment(value[0]).isSame(tmpCompareWith[0])) && !(moment(value[1]).isSame((tmpCompareWith[1] || tmpCompareWith[0]))));
            var message = this.question.message || this.question.title + " must be not equal to " + moment(tmpCompareWith[0] || tmpCompareWith[1])
                .format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.between = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (moment(value[0]).isBetween(tmpCompareWith[0], (tmpCompareWith[1] || tmpCompareWith[0]), null, '[]'))
                && (moment(value[1]).isBetween(tmpCompareWith[0], (tmpCompareWith[1]), null, '[]'));
            var message = this.question.message || this.question.title + " must be between " + moment(tmpCompareWith[0])
                .format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    DateRangeValidation.prototype.notBetween = function (value, compareWith) {
        var tmpCompareWith = validation_utils_1.ValidationUtils.fieldBifurcation(compareWith);
        if (validation_utils_1.ValidationUtils.returnNull(tmpCompareWith)) {
            var result = (!(moment(value[0]).isBetween(tmpCompareWith[0], (tmpCompareWith[1] || tmpCompareWith[0]), null, '[]'))
                && (moment(value[1]).isBetween(tmpCompareWith[0], (tmpCompareWith[1]), null, '[]')));
            var message = this.question.message || this.question.title + " must be not between " + moment(tmpCompareWith[1] || tmpCompareWith[0])
                .format(this.format) + " to " + moment(tmpCompareWith[1] || tmpCompareWith[0])
                .format(this.format);
            return { result: result, message: message };
        }
        return { result: true, message: '' };
    };
    return DateRangeValidation;
}());
exports.DateRangeValidation = DateRangeValidation;
