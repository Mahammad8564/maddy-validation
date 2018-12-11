"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var moment = require("moment-timezone");
var ValidationUtils = /** @class */ (function () {
    function ValidationUtils() {
    }
    ValidationUtils.toNumber = function (value) {
        if (isNaN(value)) {
            return value.length;
        }
        else {
            return parseInt(value);
        }
    };
    ValidationUtils.arrayLength = function (value) {
        return _.filter(value, function (item) { return item; }).length;
    };
    ValidationUtils.fieldBifurcation = function (compareWith) {
        if (compareWith || compareWith == 0) {
            var field = Array.isArray(compareWith[0]);
            if (field) {
                return JSON.parse(JSON.stringify(compareWith).replace(/((?:\[\")|(?:\"\]))/g, '"'));
            }
            else {
                return compareWith;
            }
        }
    };
    ValidationUtils.validateDate = function (firstValue, secondValue, condition, format) {
        if (condition === void 0) { condition = 'isSame'; }
        if (format === void 0) { format = "HH:mm"; }
        return moment(moment(firstValue).format(format), format)[condition](moment(moment(secondValue).format(format), format));
    };
    ValidationUtils.checkIsArray = function (value) {
        if (Array.isArray(value))
            return value.length;
        else {
            return parseInt(value);
        }
    };
    ValidationUtils.returnNull = function (array) {
        return (array.length >= 1);
    };
    ValidationUtils.hasEmptyValue = function (params) {
        return !(params || []).some(function (item) {
            return !item;
        });
    };
    return ValidationUtils;
}());
exports.ValidationUtils = ValidationUtils;
