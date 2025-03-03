export type ComparisonOperator = '!=' | '!==' | '<' | '<=' | '==' | '===' | '>' | '>=';

/**
 * @public
 */
export interface ValidationCallbackData {
    value?: any;
    rule: any;
    validator: any;
    data?: any;
    column?: any;
    formItem?: any;
}

/**
 * @docid
 * @section dxValidator
 * @namespace DevExpress.ui
 * @type object
 */
export interface AsyncRule {
    /**
     * @docid
     * @default false
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @default 'Value is invalid'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @default true
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'async';
    /**
     * @docid
     * @type_function_return Promise<any>
     * @type_function_param1 options:object
     * @type_function_param1_field value:string|number
     * @type_function_param1_field rule:object
     * @type_function_param1_field validator:object
     * @type_function_param1_field data:object
     * @type_function_param1_field column:object
     * @type_function_param1_field formItem:object
     * @public
     */
    validationCallback?: ((options: ValidationCallbackData) => PromiseLike<any>);
}

/**
 * @docid
 * @section dxValidator
 * @namespace DevExpress.ui
 * @type object
 */
export interface CompareRule {
    /**
     * @docid
     * @type_function_return object
     * @public
     */
    comparisonTarget?: (() => any);
    /**
     * @docid
     * @default '=='
     * @public
     */
    comparisonType?: ComparisonOperator;
    /**
     * @docid
     * @default false
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @default 'Values do not match'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'compare';
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface CustomRule {
    /**
     * @docid
     * @default false
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @default 'Value is invalid'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @default false
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'custom';
    /**
     * @docid
     * @type_function_param1 options:object
     * @type_function_param1_field value:string|number
     * @type_function_param1_field rule:object
     * @type_function_param1_field validator:object
     * @type_function_param1_field data:object
     * @type_function_param1_field column:object
     * @type_function_param1_field formItem:object
     * @public
     */
    validationCallback?: ((options: ValidationCallbackData) => boolean);
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface EmailRule {
    /**
     * @docid
     * @default true
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @default 'Email is invalid'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'email';
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface NumericRule {
    /**
     * @docid
     * @default true
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @default 'Value should be a number'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'numeric';
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface PatternRule {
    /**
     * @docid
     * @default true
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @default 'Value does not match pattern'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @public
     */
    pattern?: RegExp | string;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'pattern';
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface RangeRule {
    /**
     * @docid
     * @default true
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @public
     */
    max?: Date | number;
    /**
     * @docid
     * @default 'Value is out of range'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @public
     */
    min?: Date | number;
    /**
     * @docid
     * @default false
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'range';
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface RequiredRule {
    /**
     * @docid
     * @default 'Required'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @default true
     * @public
     */
    trim?: boolean;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'required';
}

/**
 * @docid
 * @type object
 * @namespace DevExpress.ui
 * @section dxValidator
 */
export interface StringLengthRule {
    /**
     * @docid
     * @default false
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid
     * @public
     */
    max?: number;
    /**
     * @docid
     * @default 'The length of the value is not correct'
     * @public
     */
    message?: string;
    /**
     * @docid
     * @public
     */
    min?: number;
    /**
     * @docid
     * @default true
     * @public
     */
    trim?: boolean;
    /**
     * @docid
     * @type Enums.ValidationRuleType
     * @public
     */
    type: 'stringLength';
}

/** @public */
export type ValidationRule = AsyncRule | CompareRule | CustomRule | EmailRule | NumericRule | PatternRule | RangeRule | RequiredRule | StringLengthRule;
/** @public */
export type ValidationRuleType = 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
