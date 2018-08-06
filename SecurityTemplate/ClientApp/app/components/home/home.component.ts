import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, NgForm  } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    loginForm: FormGroup;
    hasSubmitted: boolean = false;
    //controlNumber: new FormControl();
    //claimNumber: new FormControl();

    constructor(private router: Router) { }


ngOnInit() {
    //get controlNumberCtrl() { return this.loginForm.get('controlNumber'); }

    //get claimNumberCtrl() { return this.loginForm.get('claimNumber'); }

    //this.loginForm = buildLoginForm();
    this.loginForm = new FormGroup({
        claimNumber: new FormControl('', Validators.required),
        controlNumber: new FormControl('', Validators.required)

    });
    }
    public onLoginSubmit() {
        this.hasSubmitted = true;
        if (this.loginForm.valid) {

        }
    }
    loginSubmission() {
        if (this.loginForm.valid) {
            this.router.navigate(['/fetch-data'])
        }
    }

    //private buildLoginForm(): FormGroup {
    //    return this.fb.group({
    //        claimNumber: [null, [Validators.required]],
    //        controlNumber: [null, [Validators.required]]
    //    });
    ////,
    //  //      { validator: this.loginFormValidator });
    //}

    //private loginFormValidator(c: AbstractControl): { [key: string]: boolean } {
    //    let controlNumberCtrl = c.get("controlNumber");
    //    if (controlNumberCtrl.value === null || controlNumberCtrl.value.trim() === "") {
    //        return { "ctrlNumMissing": true };
    //    }
    //    let claimNumberCtrl = c.get("claimNumber");
    //    if (claimNumberCtrl.value === null) {
    //        return { "claimNumberMissing": true };
    //    }
        
    //    return null;
    //}
}