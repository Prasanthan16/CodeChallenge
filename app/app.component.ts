import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    pageTitle: string = 'Apple Code Challenge';
    userName: string = null;
    onSignUp(userName: string){
        this.userName = userName;
    }
}
