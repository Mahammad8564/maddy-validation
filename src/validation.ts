
import { TextValidation } from './services/text-validation';
import { CheckboxValidation } from './services/checkbox-validation';
import { DateRangeValidation } from './services/date-range-validation';
import { DateValidation } from './services/date-validation';
import { TimeRangeValidation } from './services/time-range-validation';
import { MultiSelectDropDownValidation } from './services/multi-select-drop-down-validation';
import { TimeValidation } from './services/time-validation';
import { NumberValidationService } from './services/number-validation';
import { ValidationUtils } from './util/validation-utils';
import { FieldValidation, SectionLunchCondition } from './model/field.model';

export class Validation {

  static validate(question: FieldValidation | SectionLunchCondition) {
    if (question) {
      let params = ValidationUtils.hasEmptyValue(question.params);
      if (question.required && question.currentValue == null || '') {
        return ValidationUtils.isRequired(question);
      }

      if (params && question.condition) {
        const validationInstance = Validation.getInstance(question);
        return validationInstance[question.condition](question.currentValue, question.params);
      } else {
        return { result: false, message: '' }
      }
    }
  }


  static validateWithGroup(entrys: Object, schema: Object, touchedFields?: object) {
    let questions = ValidationUtils.getFieldsByType(schema)

    let validations = {};
    (questions || []).forEach(question => {
      touchedFields[question.uid] = touchedFields[question.uid] ? touchedFields[question.uid] : true
      if (entrys[question.uid] && touchedFields[question.uid]) {
        validations[question.uid] = Validation.validate(this.makeSimpleQuestion(question, entrys));
      }
      else {
        validations[question.uid] = { result: true, message: '' }
      }

    });
    validations['result'] = (<any>Object).values(validations).every(question => question.result)
    return validations;
  }

 

  static sectionExcutionValidation(multipleCondition: Array<any>, schema: any,entry:any) {
    let results = {}
    let questions = ValidationUtils.getFieldsByType(schema)
    multipleCondition.forEach((element, index) => {
      element.leftOperand= element.leftOperand.split('-')[2]
      element['type'] = questions.find(item =>{ return item.uid == element.leftOperand  }).type.name;
      if(index!=0){
        element['bool'] = element.bool ? (element.bool == 'or' ? '||' : '&&') : '';
      }else{
        element['bool'] =''
      } 
      results[index] = this.validate(new SectionLunchCondition(element, entry))
    }); 
    
    let condition: string = ''
    multipleCondition.forEach((item, index) => {
      condition +=  (item.bool || '') +  (results[index].result)  
    }) 
    return eval(condition)
  }

  static makeSimpleQuestion(question: any, entry: object) {
    let questionConfig = new FieldValidation(question, entry)

    const makeSimpleQuestionClosure = (type) => {
      if (
        question && question.validation &&
        question.validation.condition &&
        question.validation.condition[type] &&
        question.validation.condition[type].value
      ) {
        let tempValue = question.validation.condition[type].value;
        let value = (question.validation.condition[type].type === 'field') ? entry[tempValue] : tempValue;

        questionConfig.setParams(value)
      }
    }

    makeSimpleQuestionClosure('min');
    makeSimpleQuestionClosure('max');

    return questionConfig;
  }

  static getInstance(question: FieldValidation | SectionLunchCondition): NumberValidationService | MultiSelectDropDownValidation | DateValidation | DateRangeValidation | TimeValidation | TimeRangeValidation | CheckboxValidation | TextValidation {
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
