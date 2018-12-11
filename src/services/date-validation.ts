 
import * as moment from 'moment-timezone'; 
import { ValidationUtils } from '@app/core/validation/util/validation-utils';

export class DateValidation {

  question;
  format; 
  constructor(question, format = "MM/DD/YYYY") {
    this.question = question;
    this.format = format; 
  }
  
  gt(value:any, compareWith: Array<any>) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (moment(value).isAfter(compareWith[0]));
      let message = this.question.message || `${this.question.title} must have greater than ${moment(compareWith[0]).format(this.format)} ${this.question.type}`;
      return { result: result, message: message };
    }
    return { result: true, message: '' }
  }

  lt(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (moment(value).isBefore(compareWith[0]));
      let message = this.question.message || `${this.question.title} must have less than ${moment(compareWith[0]).format(this.format)} ${this.question.type}`;
      return { result: result, message: message };
    }
    return { result: true, message: '' }
  }

  lte(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (moment(value).isSameOrBefore(compareWith[0]))
      let message = this.question.message || `${this.question.title} must have less than or equal to ${moment(compareWith[0]).format(this.format)} date`;
      return { result: result, message: message }
    }
    return { result: true, message: '' }
  }


  gte(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (moment(value).isSameOrAfter(compareWith[0]))
      let message = this.question.message || `${this.question.title} must have greater than or equal to ${moment(compareWith[0]).format(this.format)} date`;
      return { result: result, message: message }
    }
    return { result: true, message: '' }

  }

  eq(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (moment(value).isSame(compareWith[0]))
      let message = this.question.message || `${this.question.title} must be equal to ${moment(compareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: true, message: '' }
  }

  notEqual(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (!(moment(value).isSame(compareWith[0])))
      let message = this.question.message || `${this.question.title} must not be equal to ${moment(compareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: true, message: '' }
  }

  between(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (moment(value).isBetween(compareWith[0], compareWith[1], null, '[]'))
      let message = this.question.message || `${this.question.title} must have ${this.question.type} between ${moment(compareWith[0]).format(this.format)} to ${moment(compareWith[1]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: true, message: '' }
  }

  notBetween(value, compareWith) {
    if (ValidationUtils.returnNull(compareWith)) {
      let result = (!(moment(value).isBetween(compareWith[0], compareWith[1])))
      let message = this.question.message || `${this.question.title} must not have ${this.question.type} between ${moment(compareWith[0]).format(this.format)} to ${moment(compareWith[1]).format(this.format)}`;
      return { result: result, message: message  }
    }
    return { result: true, message: '' }
  }
}
