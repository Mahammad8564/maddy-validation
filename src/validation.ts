
import { TextValidation } from '@app/core/validation/services/text-validation';
import { CheckboxValidation } from '@app/core/validation/services/checkbox-validation';
import { DateRangeValidation } from '@app/core/validation/services/date-range-validation';
import { DateValidation } from '@app/core/validation/services/date-validation';
import { TimeRangeValidation } from '@app/core/validation/services/time-range-validation';
import { MultiSelectDropDownValidation } from '@app/core/validation/services/multi-select-drop-down-validation';
import { TimeValidation } from '@app/core/validation/services/time-validation';
import { NumberValidationService } from '@app/core/validation/services/number-validation';
import { Injectable } from '@angular/core';
import { ValidationUtils } from '@app/core/validation/util/validation-utils';
import { FieldValidation } from '@app/core/validation/model/field.model';

// @Injectable({
//   providedIn: 'root'
// })

export class Validation {

  static getInstance(question: FieldValidation) {
    switch (question.type) {
      case 'number':
      case 'currency':
      case 'percentage':
      case 'scientific':
      case 'exponential':
        return new NumberValidationService(question);

      case 'multiselect-dropdown':
        return new MultiSelectDropDownValidation(question);

      case 'date':
        return new DateValidation(question, "MM/DD/YYYY");

      case 'time':
        return new TimeValidation(question, 'HH:mm');

      case 'timeRange':
        return new TimeRangeValidation(question, 'HH:mm');

      case 'datetime':
        return new DateValidation(question, 'MM/DD/YYYY, HH:mm');

      case 'dateRange':
        return new DateRangeValidation(question, 'MM/DD/YYYY');

      case 'dateTimeRange':
        return new DateRangeValidation(question, 'MM/DD/YYYY, HH:mm');

      case 'checkbox':
        return new CheckboxValidation(question);

      default:
        return new TextValidation(question);
    }
  }



  static validate(question) {
    if (question) {
      let params = ValidationUtils.hasEmptyValue(question.params);
      if (params && question.condition) {
        const validationInstance = Validation.getInstance(question);
        return validationInstance[question.condition](question.currentValue, question.params);
      }
    } 
  }





}
