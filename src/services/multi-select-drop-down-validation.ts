import { Injectable } from '@angular/core';
import { ValidationUtils } from '@app/core/validation/util/validation-utils';

export class MultiSelectDropDownValidation {


  question;
  constructor(question) {
    this.question = question;
  }

  gt(value: Array<any>, compareWith: Array<any>) {
    let result = (value.length > ValidationUtils.checkIsArray(compareWith[0]))
    let message = this.question.message || `${this.question.title} must have greater than ${ValidationUtils.checkIsArray(compareWith[0])} selected value(s)`;
    return { result: result, message: message };
  }

  lt(value, compareWith) {
    let result = (value.length < ValidationUtils.checkIsArray(compareWith[0]))
    let message = this.question.message || `${this.question.title} must have less than ${ValidationUtils.checkIsArray(compareWith[0])} selected value(s)`;
    return { result: result, message: message };
  }

  lte(value, compareWith) {
    let result = (value.length <= ValidationUtils.checkIsArray(compareWith[0]))
    let message = this.question.message || `${this.question.title} must have less than or equal to ${ValidationUtils.checkIsArray(compareWith[0])} selected value(s)`;
    return { result:  result, message: message }
  }

  gte(value, compareWith) {
    let result = (value.length >= ValidationUtils.checkIsArray(compareWith[0]))
    let message = this.question.message || `${this.question.title} must have greater than or equal to ${ValidationUtils.checkIsArray(compareWith[0])} selected value(s)`;
    return { result: result, message: message } 
  }

  eq(value, compareWith) {
    let result = (value.length == ValidationUtils.checkIsArray(compareWith[0]))
    let message = this.question.message ||`${this.question.title} must have ${ValidationUtils.checkIsArray(compareWith[0])} selected value(s)`;
    return { result: result, message: message } 
  }

  notEqual(value, compareWith) {
    let result = (value.length != ValidationUtils.checkIsArray(compareWith[0]))
    let message = this.question.message || `${this.question.title} must not have ${ValidationUtils.checkIsArray(compareWith[0])} selected value(s)`;
    return { result: result, message: message }
  }

  between(value, compareWith) {
    let result = ((value > ValidationUtils.checkIsArray(compareWith[0])) && (value.length < ValidationUtils.checkIsArray(compareWith[1])))
    let message = this.question.message || `${this.question.title} must have number of value(s) selected between ${ValidationUtils.checkIsArray(compareWith[0])} to ${(compareWith[1])}`;
    return { result: result, message: message }
  }

  notBetween(value, compareWith) {
    let result = (!((value >= ValidationUtils.checkIsArray(compareWith[0])) && (value.length <= ValidationUtils.checkIsArray(compareWith[1]))))
    let message = this.question.message || `${this.question.title} must not have number of selected value(s) between ${ValidationUtils.checkIsArray(compareWith[0])} to ${(compareWith[1])}`;
    return { result: result, message: message }
  } 
}
