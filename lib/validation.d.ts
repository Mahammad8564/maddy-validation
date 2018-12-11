import { TextValidation } from './services/text-validation';
import { CheckboxValidation } from './services/checkbox-validation';
import { DateRangeValidation } from './services/date-range-validation';
import { DateValidation } from './services/date-validation';
import { TimeRangeValidation } from './services/time-range-validation';
import { MultiSelectDropDownValidation } from './services/multi-select-drop-down-validation';
import { TimeValidation } from './services/time-validation';
import { NumberValidationService } from './services/number-validation';
export declare class Validation {
    static getInstance(question: any): TextValidation | CheckboxValidation | DateRangeValidation | DateValidation | TimeRangeValidation | MultiSelectDropDownValidation | TimeValidation | NumberValidationService;
    static validate(question: any): any;
}
