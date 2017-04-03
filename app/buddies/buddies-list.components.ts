import { Component, OnInit, ViewChild } from '@angular/core';
import {IBuddy} from '../api/buddy/buddy';
import {BuddyService} from '../service/buddy/buddy.http.service';

@Component({
    templateUrl: 'app/buddies/buddies-list.component.html',
    providers:[BuddyService]
    
})

export class BuddiesListComponent implements OnInit{
    buddies : IBuddy[];
    filterBy : string;
    filterData: IBuddy[];
    errorMessage: string;
    callForm: string = "Buddy";
    index: number;
    @ViewChild('lgModal') lgModal:any;
    constructor(private _buddyService: BuddyService){};
    public max:number = 5;
    public isReadonly:boolean = false;
    
    public overStar:number;
    public percent:number;
    public hoveringOver(value:number):void {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    
    public resetStar():void {
        this.overStar = void 0;
    }
    callAccordion(event:any):void{
        if(event.target.id == "" && event.target.id !== "parent"){
            event.stopPropagation()
        }
    }
    openConfirm(index: number){
        this.lgModal.show();
        this.index = index;
    }
    confirmDelete(){
        if(this.index !== undefined && this.index !== null){
            var tmp = Object.create(this.filterData);
            tmp.splice(this.index, 1);
            this.filterData = tmp;
            this.index = undefined;
            this.lgModal.hide();
        } 
    }
    getBuddies(): void {
        this._buddyService.getBuddies()
                 .subscribe(buddies => {this.buddies = buddies; this.filterData = Object.create(this.buddies);},
                            error => this.errorMessage = <any>error);
    }
    onFilter(){
        var value = Object.create(this.buddies);
        this.filterBy = this.filterBy ? this.filterBy.toLocaleLowerCase() : null;
        this.filterData =  this.filterBy ? value.filter((buddy: IBuddy) =>
            buddy.userName.toLocaleLowerCase().indexOf(this.filterBy) !== -1) : value;  
    }
    ngOnInit(): void {
        this.getBuddies();
    }
}