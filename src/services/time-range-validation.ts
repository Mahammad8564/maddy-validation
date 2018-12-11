import { Injectable } from '@angular/core';

import * as moment from 'moment-timezone'; 
import { ValidationUtils } from '@app/core/validation/util/validation-utils';

export class TimeRangeValidation {

  //format replace 
  question;
  format; 
  constructor(question, format = "HH:mm") {
    this.question = question;
    this.format = format;
  }

  gt(value: any, compareWith: Array<any>) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isAfter', this.format)
        && ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isAfter', this.format);
      let message = this.question.message || `${this.question.title} must be greater than  ${moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message };
    }
    return { result: false, message: '' }
  }

  lt(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isBefore', this.format) &&
        ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isBefore', this.format);
      let message = this.question.message || `${this.question.title} must be less than  ${moment(tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message };
    }
    return { result: false, message: '' }
  }

  lte(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSameOrBefore', this.format)
        && ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSameOrBefore', this.format);
      let message = this.question.message || `${this.question.title} must be less than or equal to ${moment(tmpCompareWith[0]).format(this.format)}  `;
      return { result: result, message: message }
    }
    return { result: false, message: '' }
  }


  gte(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSameOrAfter', this.format)
        && ValidationUtils.validateDate(value[0], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSameOrAfter', this.format);
      let message = this.question.message || `${this.question.title} must be greater than or equal to ${moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: false, message: '' }

  }

  eq(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSame', this.format)
        && ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSame', this.format);
      let message = this.question.message || `${this.question.title} must be equal to ${moment(tmpCompareWith[0]
        || tmpCompareWith[1]).format(this.format)} to ${moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: false, message: '' }
  }

  notEqual(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = (!ValidationUtils.validateDate(value[0], (tmpCompareWith[0]), 'isSame', this.format))
        && (!ValidationUtils.validateDate(value[1], (tmpCompareWith[1] || tmpCompareWith[0]), 'isSame', this.format));
      let message = this.question.message || `${this.question.title} must be not equal to ${moment(tmpCompareWith[0]
        || tmpCompareWith[1]).format(this.format)} to ${moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: false, message: '' }
  }

  between(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = (moment(moment(value[0]).format(this.format), this.format)
        .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1]).format(this.format), this.format)))
        && (moment(moment(value[1]).format(this.format), this.format)
          .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1]).format(this.format), this.format)));
      let message = this.question.message || `${this.question.title} must be between ${moment(tmpCompareWith[0]).format(this.format)} to ${moment(tmpCompareWith[1]
        || tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: false, message: '' }
  }

  notBetween(value, compareWith) {
    let tmpCompareWith = ValidationUtils.fieldBifurcation(compareWith)
    if (ValidationUtils.returnNull(tmpCompareWith)) {
      let result = (!(moment(moment(value[0]).format(this.format), this.format)
        .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1])
          .format(this.format), this.format))) && (moment(moment(value[1]).format(this.format), this.format)
            .isBetween(moment(moment(tmpCompareWith[0]).format(this.format), this.format), moment(moment(tmpCompareWith[1]).format(this.format), this.format))))
      let message = this.question.message || `${this.question.title} must be not between ${moment(tmpCompareWith[1] || tmpCompareWith[0])
        .format(this.format)} to ${moment(tmpCompareWith[1] || tmpCompareWith[0]).format(this.format)}`;
      return { result: result, message: message }
    }
    return { result: false, message: '' }
  }
}
