import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';


export function NotEqualsValidator(control: AbstractControl): ValidationErrors | null {

    // TODO

    return null;
}

@Directive({
    selector: '[appNotEqualsValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NotEqualsValidatorDirective, multi: true }]
})
export class NotEqualsValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return NotEqualsValidator(control);
    }
}
