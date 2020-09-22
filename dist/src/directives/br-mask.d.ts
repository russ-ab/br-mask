import { ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
export declare class BrMaskModel {
    form?: AbstractControl;
    mask?: string;
    len?: number;
    person?: boolean;
    phone?: boolean;
    phoneNotDDD?: boolean;
    money?: boolean;
    percent?: boolean;
    type?: 'alfa' | 'num' | 'all';
    decimal?: number;
    decimalCaracter?: string;
    thousand?: string;
    userCaracters?: boolean;
    numberAndTousand?: boolean;
    moneyInitHasInt?: boolean;
}
export declare class BrMaskDirective implements OnInit {
    private controlContainer;
    private elementRef;
    brmasker: BrMaskModel;
    formControlName: string;
    /**
    * Event key up in directive
    * @author Antonio Marques <tmowna@gmail.com>
    * @constant {string} value
    */
    inputKeyup(event: any): void;
    onNgModelChange(e: any): void;
    constructor(controlContainer: FormGroupDirective, elementRef: ElementRef);
    ngOnInit(): void;
    initialValue(): void;
    /**
    * The verification of form
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.verifyFormControl()</caption>
    * @returns {boolean} return a boolean value
    */
    verifyFormControl(): boolean;
    /**
    * Set Value em FormControl
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string)</caption>
    */
    setValueInFormControl(value: string, emitViewToModelChange?: boolean): void;
    /**
    * For initial value
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} mask intial value
    */
    writeCreateValue(value: string, config?: BrMaskModel): string;
    /**
    * For initial value percent
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePercent(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    writeValuePercent(value: string): string;
    /**
    * For initial value person
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePerson(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    writeValuePerson(value: string): string;
    /**
    * For initial value money
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValueMoney(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} value
    * @returns {string} mask intial value
    */
    writeValueMoney(value: string, config?: BrMaskModel): string;
    /**
    * Here is one of the main functions
    * responsible for identifying the type of mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.returnValue(string)</caption>
    * @param {string} value
    * @returns {string} mask value
    */
    returnValue(value: string): string;
    applyCpfMask(formValue: string): string;
    applyCnpjMask(formValue: string): string;
    /**
    * Here we have a mask for percentage
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.percentMask(string)</caption>
    * @param {string} value
    * @returns {string} string percentage
    */
    private percentMask;
    /**
    * Here we have a mask for phone in 8 digits or 9 digits
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    private phoneMask;
    /**
    * Here we have a mask for phone in 8 digits or 9 digits not ddd
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    private phoneNotDDDMask;
    /**
    * Here we have a mask for peapoll ID
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.peapollMask(string)</caption>
    * @param {string} value
    * @returns {string} string ID
    */
    private peapollMask;
    /**
    * Here we have a mask for money mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.moneyMask(string)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} string money
    */
    private moneyMask;
    /**
    * Responsible for returning the empty mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.onInput(string)</caption>
    * @param {string} value
    * @returns {string} value
    */
    private onInput;
    /**
    * Responsible for special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.usingSpecialCharacters(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    private usingSpecialCharacters;
    /**
    * Responsible formating number
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.thousand(string)</caption>
    * @param {string} value
    */
    private thousand;
    /**
    * Responsible for removing special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.formatField(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    private formatField;
}
