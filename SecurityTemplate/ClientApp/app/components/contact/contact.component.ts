import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    hasSubmitted: boolean = false;
    constructor(private routing: Router, private fb: FormBuilder) {

    }

    ngOnInit() {
        //this.contactForm = new FormGroup({
        //    beneficialowner: new FormControl('', Validators.required),
        //    jointBeneficialOwner: new FormControl('', Validators.required),
        //    country: new FormControl('', Validators.required),
        //    streetAddress1: new FormControl('', Validators.required),
        //    streetAddress2: new FormControl('', null),
        //    city: new FormControl('', Validators.required),
        //    state: new FormControl('', Validators.required),
        //    zipcode: new FormControl('', Validators.required),
        //    ssnNumber: new FormControl('', Validators.required),
        //    recordOwner: new FormControl('', null),
        //    accountNumber: new FormControl('', null),
        //    workPhone: new FormControl('', Validators.required),
        //    email: new FormControl('', Validators.required),
        //    confirmMail: new FormControl('', Validators.required)

        //});

        this.contactForm = this.buildContactForm();
    }

    contactSubmit() {
        this.hasSubmitted = true;
        if (this.contactForm.valid) {
            this.routing.navigate(['./transaction']);
        }
    }

    private buildContactForm() {
        return this.fb.group({
            beneficialowner: [null, [Validators.required]],
            jointBeneficialOwner: [null, [Validators.required]],
            country: [null, [Validators.required]],
            streetAddress1: [null, [Validators.required]],
            streetAddress2: [null, null],
            city: [null, [Validators.required]],
            state: [null, [Validators.required]],
            zipcode: [null, [Validators.required]],
            ssnNumber: [null, [Validators.required]],
            recordOwner: [null, null],
            accountNumber: [null, null],
            workPhone: [null, [Validators.required]],
            email: [null, [Validators.required]],
            confirmEmail: [null, [Validators.required]]
        });
        
    }

    //private contactFormValidator(c: AbstractControl): { [key: string]: boolean } {
    //    let beneficialownerCtrl = c.get("beneficialowner");
    //    if (beneficialownerCtrl.value === null || beneficialownerCtrl.value.trim() === "") {
    //        return { "beneficialownerMissing": true };
    //    }

    //   return null;
    //}

    
}
