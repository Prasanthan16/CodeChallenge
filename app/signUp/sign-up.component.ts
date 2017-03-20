import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchingPasswords } from '../shared/validator/password.validator';
import { DateValidator } from '../shared/validator/date.validator';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'app/signUp/sign-up.component.html'
})
export class SignUpComponent implements OnInit{
    signUpForm : FormGroup;
    userName: string;
    private sub: any;
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
            'userName' : [null, Validators.compose([Validators.required, Validators.maxLength(56)])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirmPassword' : [null, Validators.required],
            'firstName' : [null, Validators.required],
            'lastName' : [null],
            'birthday' :[null, Validators.compose([Validators.required, DateValidator])]
        },{validator: MatchingPasswords('password', 'confirmPassword')});
    }

    submitForm(value: any):void{
        console.log('Reactive Form Data:');
        this.onSignUp.emit(value.userName);
        this.router.navigate(['/home', value.userName]);
    }

    @Output() onSignUp = new EventEmitter<string>();

}