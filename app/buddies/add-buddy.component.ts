import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProperStatus } from '../shared/validator/status.validator';
import { EmailValidator } from '../shared/validator/email.validator';
import { DateValidator } from '../shared/validator/date.validator';
import { Router, ActivatedRoute } from '@angular/router';
import {IBuddy} from '../api/buddy/buddy';
import {IMyOptions} from 'mydatepicker';



@Component({
    selector: 'add-bud',
    templateUrl: 'app/buddies/add-buddy.component.html'
})
export class AddBudComponent {
    budForm : FormGroup;
    userName: string;
    fb:FormBuilder;
    @Input() parentData: IBuddy[];
    private sub: any;
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
        this.budForm.setValue({userName:'', emailId:'', status:'', firstName:'', lastName:'', birthday: ''});
        this.lgModal.show();
    }
   @ViewChild('lgModal') lgModal:any;
    constructor(fb: FormBuilder){

        this.budForm = fb.group({
            'userName' : [null, Validators.compose([Validators.required, Validators.maxLength(56), EmailValidator])],
            'emailId': [null, Validators.compose([Validators.required, EmailValidator])],
            'status' : [null, Validators.compose([Validators.required, ProperStatus])],
            'firstName' : [null, Validators.required],
            'lastName' : [null, Validators.required],
            'birthday' :[null, Validators.compose([Validators.required, DateValidator])]
        });
    }
    submitForm(value: any):void{
        value["DOB"] = value.birthday.formatted;
        this.parentData = this.parentData.concat(value);
        this.onAdd.emit(this.parentData);
        this.lgModal.hide();
    }

    @Output() onAdd = new EventEmitter<IBuddy[]>();

}