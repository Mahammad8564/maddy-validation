
import { TextValidation } from './services/text-validation';
import { CheckboxValidation } from './services/checkbox-validation';
import { DateRangeValidation } from './services/date-range-validation';
import { DateValidation } from './services/date-validation';
import { TimeRangeValidation } from './services/time-range-validation';
import { MultiSelectDropDownValidation } from './services/multi-select-drop-down-validation';
import { TimeValidation } from './services/time-validation';
import { NumberValidationService } from './services/number-validation';
import { ValidationUtils } from './util/validation-utils';
import { FieldValidation } from './model/field.model';

export class Validation {

  static validate(question: FieldValidation) {
    if (question) {
      let params = ValidationUtils.hasEmptyValue(question.params);
      if (params && question.condition) {
        const validationInstance = Validation.getInstance(question);
        return validationInstance[question.condition](question.currentValue, question.params);
      }
    }
  }


  static validateWithGroup(entrys: Object, schema: Object) {
    let questions = ValidationUtils.getFieldsByType(schema)

    let validations = {};
    (questions || []).forEach(question => { 
      validations[question.uid] = Validation.validate(ValidationUtils.makeSimpleQuestion(question, entrys));
      validations[question.uid].result=!validations[question.uid].result
    });
    return validations;
  }


  static getInstance(question: FieldValidation): NumberValidationService | MultiSelectDropDownValidation | DateValidation | DateRangeValidation | TimeValidation | TimeRangeValidation | CheckboxValidation | TextValidation {
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



}
