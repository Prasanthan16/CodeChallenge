import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import {IBuddy} from '../api/buddy/buddy';
import {FORM_TYPE} from '../shared/enums/enum-form';

@Component({
    selector: 'add-bud',
    templateUrl: 'app/buddies/add-buddy.component.html'
})
export class AddBudComponent {
    callForm:  FORM_TYPE = FORM_TYPE.BUDDY;
    @Input() parentData: IBuddy[];
    @Input() formLable: String;
    @Output() onAdd = new EventEmitter<IBuddy[]>();
    @ViewChild('lgModal') lgModal:any;
    @ViewChild('userForm') userForm:any;
     @ViewChild('group') accordian:any;
    private sub: any;
    showBuddy(): void {
        this.lgModal.show();
        this.userForm.clearDate();
    }
    constructor(){}
    callAccordion(event:any):void{
        this.accordian.toggleOpen(event);
    }
    onEnd(value:any): void {
        value["DOB"] = value.birthday.formatted;
        this.parentData = this.parentData.concat(value);
        this.onAdd.emit(this.parentData);
        this.lgModal.hide();
    }
}