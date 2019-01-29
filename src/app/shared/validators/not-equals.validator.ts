import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';


export function NotEqualsValidator(otherFieldName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

        const otherFieldControl = control.root.get(otherFieldName);

        // if the other control is not found / not loaded
        if (!otherFieldControl) {
            return null;
        }

        const thisFieldValue = control.value;
        const otherFieldValue = otherFieldControl.value;

        // if both exist, we compare them
        if (thisFieldValue !== otherFieldValue) {
            return null;
        }

        // if they are equal, tha validation fails
        return {
            notequals: {
                valid: false,
                message: `Should not equal ${otherFieldName}`
            }
        };
    };
}

@Directive({
    selector: '[appNotEqualsValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NotEqualsValidatorDirective, multi: true }]
})
export class NotEqualsValidatorDirective implements Validator {
    @Input('appNotEqualsValidator') otherFieldName: string;

    validate(control: AbstractControl): ValidationErrors | null {
        return NotEqualsValidator(this.otherFieldName);
    }
}
