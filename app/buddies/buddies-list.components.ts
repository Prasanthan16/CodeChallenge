import { Component, OnInit } from '@angular/core';
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
    constructor(private _buddyService: BuddyService){};
    deleteBuddy(index: number){
        var tmp = Object.create(this.filterData);
        tmp.splice(index, 1);
        this.filterData = tmp;
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