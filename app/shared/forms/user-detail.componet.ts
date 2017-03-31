import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProperStatus } from '../validator/status.validator';
import { EmailValidator } from '../validator/email.validator';
import { DateValidator } from '../validator/date.validator';
import { MatchingPasswords } from '../validator/password.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { IBuddy} from '../../api/buddy/buddy';
import { IMyOptions } from 'mydatepicker';
import { FORM_TYPE } from '../enums/enum-form';

@Component({
    selector: 'user-form',
    templateUrl: 'app/shared/forms/user-detail.componet.html'
})

export class CommonFormComponet implements OnInit{
    commonFormGroup: FormGroup;
    fb:FormBuilder;
    signIn: boolean;
    buddy: boolean;
    @Input() formLable: any;
    @Input() onSubmit: any;
    @Input() parentData: IBuddy[];
    @ViewChild('lgModal') lgModal:any;
    @Input() confirm: any;
    @Output() onEnd = new EventEmitter<IBuddy[]>();
    constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute){
        this.commonFormGroup = fb.group({
            'userName' : [null, Validators.compose([Validators.required, Validators.maxLength(56), EmailValidator])],
            'firstName' : [null, Validators.required],
            'lastName' : [null, Validators.required],
            'birthday' :[null, Validators.compose([Validators.required, DateValidator])]
        });
    }
    ngOnInit(): void{
            console.log("there");
            if(this.formLable === FORM_TYPE.SIGN_IN){
                this.commonFormGroup.addControl("password", new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])));
                this.commonFormGroup.addControl("confirmPassword", new FormControl(null, Validators.required));
                this.commonFormGroup.setValidators(MatchingPasswords('password', 'confirmPassword'));
                this.signIn = true;
            } else if (this.formLable === FORM_TYPE.BUDDY) {
                this.commonFormGroup.addControl("emailId", new FormControl(null, Validators.compose([Validators.required, EmailValidator])));
                this.commonFormGroup.addControl("status", new FormControl(null, Validators.compose([Validators.required, ProperStatus])));
                this.buddy = true;
            }
    }

    private birthdayPickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        alignSelectorRight: true
    };
    onlyText(evt: any) {
       var keyCode = (evt.which) ? evt.which : evt.keyCode
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32){
            return false;
        } else {
            return true;
        }   
    }
    clearDate(): void {
        this.commonFormGroup.setValue({userName:'', emailId:'', status:'', firstName:'', lastName:'', birthday: ''});
    }
    onFormSubmit(value: any):void {
        this.onEnd.emit(value);
    }
}