import * as _ from 'lodash';
import { ValidationUtils } from '@app/core/validation/util/validation-utils';

export class CheckboxValidation {
  question;
  constructor(question) {
    this.question = question;
  }

  gt(value: Array<any>, compareWith: Array<any>) {
    let result = (ValidationUtils.arrayLength(value) > compareWith[0])
    let message = this.question.message || `${this.question.title} must have greater than ${compareWith[0]} option(s) selected`;
    return { result: result, message: message };
  }

  lt(value, compareWith) {
    let result = (ValidationUtils.arrayLength(value) < compareWith[0])
    let message = this.question.message || `${this.question.title} must have less than ${compareWith[0]} option(s) selected`;
    return { result: result, message: message };
  }

  lte(value, compareWith) {
    let result = (ValidationUtils.arrayLength(value) <= compareWith[0])
    let message = this.question.message || `${this.question.title} must have less than or equal to ${compareWith[0]} option(s) selected`;
    return { result: result, message: message }
  }

  gte(value, compareWith) {
    let result = (ValidationUtils.arrayLength(value) >= compareWith[0])
    let message = this.question.message || `${this.question.title} must have greater than or equal to ${compareWith[0]} option(s) selected`;
    return { result: result, message: message }
  }

  eq(value, compareWith) {
    let result = (ValidationUtils.arrayLength(value) == compareWith[0])
    let message = this.question.message || `${this.question.title} must have ${compareWith[0]} option(s) selected`;
    return { result: result, message: message }
  }

  notEqual(value, compareWith) {
    let result = (ValidationUtils.arrayLength(value) != compareWith[0])
    let message = this.question.message || `${this.question.title} must not have ${compareWith[0]} option(s) selected`;
    return { result: result, message: message }
  }

  between(value, compareWith) {
    let result = ((value > compareWith[0]) && (ValidationUtils.arrayLength(value) < compareWith[1]))
    let message = this.question.message || `${this.question.title} must have number of selected options between ${compareWith[0]} to ${(compareWith[1])}`;
    return { result: result, message: message }
  }

  notBetween(value, compareWith) {
    let result = (!((value >= compareWith[0]) && (ValidationUtils.arrayLength(value) <= compareWith[1])))
    let message = this.question.message || `${this.question.title} must not have number of selected options between ${compareWith[0]} to ${(compareWith[1])}`;
    return { result: result, message: message }
  }
}
