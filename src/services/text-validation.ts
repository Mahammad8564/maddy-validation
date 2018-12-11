import * as _ from 'lodash';
import { ValidationUtils } from '@app/core/validation/util/validation-utils';

export class TextValidation {

  question;
  constructor(question) {
    this.question = question;
  }

  gt(value: any, compareWith: Array<any>) {
    let compareValue = ValidationUtils.toNumber(compareWith[0]);
    let result = (value.length > compareValue);
    let message = this.question.message || `${this.question.title} must be greater than ${compareValue}`;
    return { result: result, message: message };
  }

  lt(value: any, compareWith:Array<any>) {
    let compareValue = ValidationUtils.toNumber(compareWith[0])
    let result = (value.length < compareValue)
    let message = this.question.message || `${this.question.title} must be less than ${compareValue}`;
    return { result: result, message: message };
  }

  lte(value: any, compareWith:Array<any>) {
    let compareValue = ValidationUtils.toNumber(compareWith[0]);
    let result = (value.length <= compareValue)
    let message = this.question.message || `${this.question.title} must be less than or equal to ${compareValue}`;
    return { result: result, message: message }
  }


  gte(value: any, compareWith:Array<any>) {
    let compareValue = ValidationUtils.toNumber(compareWith[0])
    let result = (value.length >= compareValue)
    let message = this.question.message || `${this.question.title} must be greater than or equal to ${compareValue}`;
    return { result: result, message: message }

  }

  eq(value: any, compareWith:Array<any>) {
    let compareValue = ValidationUtils.toNumber(compareWith[0])
    let result = (value.length == compareValue)
    let message = this.question.message || `${this.question.title} must be equal to ${compareValue}`;
    return { result: result, message: message }

  }

  notEqual(value: any, compareWith:Array<any>) {
    let compareValue = ValidationUtils.toNumber(compareWith[0])
    let result = (value.length != compareValue)
    let message = this.question.message || `${this.question.title} must be not equal to ${compareWith[0]}`;
    return { result: result, message: message }
  }

  between(value: any, compareWith:Array<any>) {
    let firstValue = ValidationUtils.toNumber(compareWith[0])
    let secondValue = ValidationUtils.toNumber(compareWith[1])

    let result = ((value.length > firstValue) && (value.length < secondValue))
    let message = this.question.message || `${this.question.title} must be between ${firstValue} to ${secondValue}`;
    return { result: result, message: message }
  }

  notBetween(value: any, compareWith:Array<any>) {
    let firstValue = ValidationUtils.toNumber(compareWith[0])
    let secondValue = ValidationUtils.toNumber(compareWith[1]);
    let result = (!((value.length >= firstValue) && (value.length <= secondValue)))
    let message = this.question.message || `${this.question.title} must be not between ${firstValue} to ${secondValue}`;
    return { result: result, message: message }
  };

  sameAs(value: any, compareWith:Array<any>) {
    let result = (value == compareWith[0])
    let message = this.question.message || `${this.question.title} must be equal to ${compareWith[0]}`;
    return { result: result, message: message }
  };

  notSame(value: any, compareWith:Array<any>) {
    let result = (value != compareWith[0])
    let message = this.question.message || `${this.question.title} must be equal to ${compareWith[0]}`;
    return { result: result, message: message }
  };


  contains(value: any, compareWith:Array<string>) {
    let result = (value.includes(compareWith[0]))
    let message = this.question.message || `${this.question.title} must contain ${compareWith[0]}`;
    return { result: result, message: message }
  }

  notContains(value: any, compareWith:Array<string>) {
    let result = (!(value.includes(compareWith[0])));
    let message = this.question.message || `${this.question.title} must not contain ${compareWith[0]}`;
    return { result: result, message: message };
  }

  startwith(value: any, compareWith:Array<string>) {
    let result = ((compareWith[0]).startsWith(value))
    let message = this.question.message || `${this.question.title} must be start with ${compareWith[0]}`;
    return { result: result, message: message }
  };

  endswith(value: any, compareWith:Array<string>) {
    let result = (compareWith[0].endsWith(value))
    let message = this.question.message || `${this.question.title} must ends with ${compareWith[0]}`;
    return { result: result, message: message }
  };
}
