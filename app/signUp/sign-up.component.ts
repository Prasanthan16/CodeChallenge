import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchingPasswords } from '../shared/validator/password.validator';
import { DateValidator } from '../shared/validator/date.validator';
import { EmailValidator } from '../shared/validator/email.validator';
import { Router, ActivatedRoute } from '@angular/router';
import {IMyOptions} from 'mydatepicker';


@Component({
    templateUrl: 'app/signUp/sign-up.component.html'
})
export class SignUpComponent implements OnInit{
    signUpForm : FormGroup;
    userName: string;
    private sub: any;
    private birthdayPickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        alignSelectorRight: true
    };
    @ViewChild('lgModal') lgModal:any;
    ngOnInit(): void {
       this.sub = this.route.params.subscribe(
           params => {
           this.userName = params['userName'];
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute){
        this.signUpForm = fb.group({
            'userName' : [null, Validators.compose([Validators.required, EmailValidator, Validators.maxLength(56)])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirmPassword' : [null, Validators.required],
            'firstName' : [null, Validators.required],
            'lastName' : [null],
            'birthday' :[null, Validators.compose([Validators.required, DateValidator])]
        },{validator: MatchingPasswords('password', 'confirmPassword')});
    }
    setDate(): void {
        let date = new Date();
        this.signUpForm.setValue({birthday: {
        date: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()}
        }});
    }
    clearDate(): void {
        this.signUpForm.setValue({birthday: ''});
    }
    onlyText(evt: any) {
       var keyCode = (evt.which) ? evt.which : evt.keyCode
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32){
            return false;
        } else {
            return true;
        }   
    }
    
    submitForm(value: any):void{
        console.log('Reactive Form Data:');
        this.lgModal.show();
        this.userName = value.userName;
        this.onSignUp.emit(value.userName);
    }
    confirm(){
        this.router.navigate(['/home', this.userName]);
    }

    @Output() onSignUp = new EventEmitter<string>();

}