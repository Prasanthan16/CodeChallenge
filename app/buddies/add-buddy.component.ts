import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProperStatus } from '../shared/validator/status.validator';
import { EmailValidator } from '../shared/validator/email.validator';
import { DateValidator } from '../shared/validator/date.validator';
import { Router, ActivatedRoute } from '@angular/router';
import {IBuddy} from '../api/buddy/buddy';



@Component({
    selector: 'add-bud',
    templateUrl: 'app/buddies/add-buddy.component.html'
})
export class AddBudComponent {
    budForm : FormGroup;
    userName: string;
    @Input() parentData: IBuddy[];
    private sub: any;
   @ViewChild('lgModal') lgModal:any;
    constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute){
        this.budForm = fb.group({
            'userName' : [null, Validators.compose([Validators.required, Validators.maxLength(56)])],
            'emailId': [null, Validators.compose([Validators.required, EmailValidator])],
            'status' : [null, Validators.required],// , ProperStatus
            'firstName' : [null, Validators.required],
            'lastName' : [null, Validators.required],
            'birthday' :[null, Validators.compose([Validators.required, DateValidator])]
        });
    }

    submitForm(value: any):void{
        this.parentData = this.parentData.concat(value);
        this.lgModal.hide();
    }

    @Output() onSignUp = new EventEmitter<string>();

}