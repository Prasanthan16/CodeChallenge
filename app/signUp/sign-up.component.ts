import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FORM_TYPE} from '../shared/enums/enum-form';
import {IMyOptions} from 'mydatepicker';


@Component({
    templateUrl: 'app/signUp/sign-up.component.html'
})
export class SignUpComponent implements OnInit{
    userName: string;
    private sub: any;
    callForm:  FORM_TYPE = FORM_TYPE.SIGN_IN;
    @Output() onSignUp = new EventEmitter<string>();
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
    constructor(private router: Router, private route: ActivatedRoute){}
    confirm(){
        this.router.navigate(['/home', this.userName]);
    }
    onEnd(value: any):void{
        this.userName = value.userName;
        this.lgModal.show();
    }
}