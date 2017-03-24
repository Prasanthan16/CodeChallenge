import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { SignUpComponent } from './signUp/sign-up.component';
import { BuddiesListComponent } from './buddies/buddies-list.components';
import { StatusDirective } from './shared/status/status.directive';
import { StatusComponent } from './shared/status/status.component';
import {AddBudComponent} from './buddies/add-buddy.component';
import { MyDatePickerModule } from 'mydatepicker';
//import { StringOnlyPipe } from './shared/customPipe/string-only.pipe';
import { AccordionModule, SortableModule, ModalModule , DropdownModule, RatingModule} from 'ng2-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    SortableModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'buddy/:userName', component: BuddiesListComponent},
      { path: 'signup', component: SignUpComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
   // StringOnlyPipe,
    AppComponent,
    StatusDirective,
    StatusComponent,
    WelcomeComponent,
    SignUpComponent,
    AddBudComponent,
    BuddiesListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
 }
