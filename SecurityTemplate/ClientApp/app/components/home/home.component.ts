import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    loginForm: FormGroup;
    controlNumber: string;
    claimNumber: string;

    ngOnInit() {
        this.loginForm = buildLoginForm();
    }

    constructor(private fb: FormBuilder) { }

    onSubmit() {

    }

    private buildLoginForm(): FormGroup {
        return this.fb.group({
            claimNumber: [null, [Validators.required]],
            controlNumber: [null, [Validators.required]]
        },
            { validator: this.loginFormValidator });
    }

    private loginFormValidator(c: AbstractControl): { [key: string]: boolean } {
        let controlNumberCtrl = c.get("controlNumber");
        if (controlNumberCtrl.value === null || controlNumberCtrl.value.trim() === "") {
            return { "ctrlNumMissing": true };
        }
        let claimNumberCtrl = c.get("claimNumber");
        if (claimNumberCtrl.value === null) {
            return { "claimNumberMissing": true };
        }
        
        return null;
    }
}