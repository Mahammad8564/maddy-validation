"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_validation_1 = require("./services/text-validation");
var checkbox_validation_1 = require("./services/checkbox-validation");
var date_range_validation_1 = require("./services/date-range-validation");
var date_validation_1 = require("./services/date-validation");
var time_range_validation_1 = require("./services/time-range-validation");
var multi_select_drop_down_validation_1 = require("./services/multi-select-drop-down-validation");
var time_validation_1 = require("./services/time-validation");
var number_validation_1 = require("./services/number-validation");
var validation_utils_1 = require("./util/validation-utils");
var Validation = /** @class */ (function () {
    function Validation() {
    }
    Validation.getInstance = function (question) {
        switch (question.type) {
            case 'number':
            case 'currency':
            case 'percentage':
            case 'scientific':
            case 'exponential':
                return new number_validation_1.NumberValidationService(question);
            case 'multiselect-dropdown':
                return new multi_select_drop_down_validation_1.MultiSelectDropDownValidation(question);
            case 'date':
                return new date_validation_1.DateValidation(question, "MM/DD/YYYY");
            case 'time':
                return new time_validation_1.TimeValidation(question, 'HH:mm');
            case 'timeRange':
                return new time_range_validation_1.TimeRangeValidation(question, 'HH:mm');
            case 'datetime':
                return new date_validation_1.DateValidation(question, 'MM/DD/YYYY, HH:mm');
            case 'dateRange':
                return new date_range_validation_1.DateRangeValidation(question, 'MM/DD/YYYY');
            case 'dateTimeRange':
                return new date_range_validation_1.DateRangeValidation(question, 'MM/DD/YYYY, HH:mm');
            case 'checkbox':
                return new checkbox_validation_1.CheckboxValidation(question);
            default:
                return new text_validation_1.TextValidation(question);
        }
    };
    Validation.validate = function (question) {
        if (question) {
            var params = validation_utils_1.ValidationUtils.hasEmptyValue(question.params);
            if (params && question.condition) {
                var validationInstance = Validation.getInstance(question);
                return validationInstance[question.condition](question.currentValue, question.params);
            }
        }
    };
    return Validation;
}());
exports.Validation = Validation;
