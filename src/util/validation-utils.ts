import * as moment from 'moment-timezone';
import { FieldValidation, SectionLunchCondition } from '../model/field.model';

export class ValidationUtils {

  static toNumber(value: any): number {
    if (isNaN(value)) {
      return value.length;
    } else {
      return parseInt(value);
    }
  }

  static arrayLength(value: Array<any>): number {
    return (value || []).filter((item: any) => item).length;
  }

  static fieldBifurcation(compareWith: Array<any>) {
    if (compareWith && compareWith[0]) {
      if (Array.isArray(compareWith[0])) {
        return JSON.parse(JSON.stringify(compareWith).replace(/((?:\[\")|(?:\"\]))/g, '"'));
      } else {
        return compareWith;
      }
    }
  }

  static validateDate(firstValue: string | Date, secondValue: string | Date, condition: string = 'isSame', format = "HH:mm") {
    return moment(moment(firstValue).format(format), format)[condition](moment(moment(secondValue).format(format), format))
  }

  static checkIsArray(value: Array<any> | string) {
    if (Array.isArray(value))
      return value.length;
    else {
      return parseInt(value);
    }
  }

  static returnNull(array: Array<any>) {
    return (array.length >= 1);
  }

  static hasEmptyValue(params: Array<any>) {
    return !(params || []).some(item => {
      return !item
    });
  }

  static isRequired(question: FieldValidation | SectionLunchCondition) {
    return { result: false, message: question.title + ' is Required' }
  }

  static getFieldsByType(arrayOrObject) {
    const questions = [];
    if (!arrayOrObject) {
      return questions;
    }
    (arrayOrObject.blocks || arrayOrObject.sections || arrayOrObject.fields || arrayOrObject).forEach((block) => {
      (block.sections || block.fields || [block]).forEach((section) => {
        (section.fields || [section]).forEach((field) => {
          const newField = JSON.parse(JSON.stringify(field));
          questions.push(newField);
        });
      });
    });
    return questions;
  }




}
