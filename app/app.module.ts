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
import { AccordionModule, SortableModule, ModalModule , DropdownModule} from 'ng2-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    SortableModule.forRoot(),
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
