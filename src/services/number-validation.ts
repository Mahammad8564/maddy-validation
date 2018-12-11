import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ValidationUtils } from '@app/core/validation/util/validation-utils';

export class NumberValidationService {


  question;
  constructor(question) {
    this.question = question;
  }

  gt(value: any, compareWith: Array<any>) {
    let result = (parseFloat(value) > parseFloat(compareWith[0]));
    let message = this.question.message || `${this.question.title} must be greater than ${parseFloat(compareWith[0])}`;
    return { result: result, message: message };
  }

  lt(value, compareWith) {
    let result = (parseFloat(value) < parseFloat(compareWith[0]))
    let message = this.question.message || `${this.question.title} must be less than ${parseFloat(compareWith[0])}`;
    return { result: result, message: message };
  }

  lte(value, compareWith) {
    let result = (parseFloat(value) <= parseFloat(compareWith[0]))
    let message = this.question.message || `${this.question.title} must be less than or equal to ${parseFloat(compareWith[0])}`;
    return { result: result, message: message }
  }


  gte(value, compareWith) {
    let result = (parseFloat(value) >= parseFloat(compareWith[0]))
    let message = this.question.message || `${this.question.title} must be greater than or equal to ${parseFloat(compareWith[0])}`;
    return { result: result, message: message }

  }

  eq(value, compareWith) {
    let result = (parseFloat(value) == parseFloat(compareWith[0]))
    let message = this.question.message ||`${this.question.title} must be equal to ${parseFloat(compareWith[0])}`;
    return { result: result, message: message }

  }

  notEqual(value, compareWith) {
    let result = (parseFloat(value) != parseFloat(compareWith[0]))
    let message = this.question.message || `${this.question.title} must be not equal to ${parseFloat(compareWith[0])}`;
    return { result: result, message: message }
  }

  between(value, compareWith) {
    let result = ((parseFloat(value) > parseFloat(compareWith[0])) && (parseFloat(value) < parseFloat(compareWith[1])))
    let message = this.question.message || `${this.question.title} must be between ${parseFloat(compareWith[0])} to ${(compareWith[1])}`;
    return { result: result, message: message }
  }

  notBetween(value, compareWith) {
    let result = (!((parseFloat(value) >= parseFloat(compareWith[0])) && (parseFloat(value) <= parseFloat(compareWith[1]))))
    let message = this.question.message || `${this.question.title} must be not between ${parseFloat(compareWith[0])} to ${(compareWith[1])}`;
    return { result: result, message: message }
  }
}
