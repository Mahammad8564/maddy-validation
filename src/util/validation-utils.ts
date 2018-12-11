import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { TextValidation } from '@app/core/validation/services/text-validation';

export class ValidationUtils {

  static toNumber(value) {
    if (isNaN(value)) {
      return value.length;
    } else {
      return parseInt(value);
    }
  }

  static arrayLength(value) {
    return _.filter(value, (item) => item).length;
  }

  static fieldBifurcation(compareWith) {
    if (compareWith || compareWith == 0) {
      let field = Array.isArray(compareWith[0]);
      if (field) {
        return JSON.parse(JSON.stringify(compareWith).replace(/((?:\[\")|(?:\"\]))/g, '"'));
      } else {
        return compareWith;
      }
    }
  }

  static validateDate(firstValue, secondValue, condition: string = 'isSame', format = "HH:mm") {
    return moment(moment(firstValue).format(format), format)[condition](moment(moment(secondValue).format(format), format))
  }

  static checkIsArray(value) {
    if (Array.isArray(value))
      return value.length
    else {
      return parseInt(value)
    }
  }


  static returnNull(array) {
    return (array.length >= 1)
  }



  static hasEmptyValue(params) {
    return !(params || []).some(item => {
      return !item
    })
  }
}
