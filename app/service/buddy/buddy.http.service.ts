import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IBuddy } from '../../api/buddy/buddy';

@Injectable()
export class BuddyService {
    private _buddyUrl = 'app/api/data/buddy.json';

    constructor(private _http: Http) { }

    getBuddies(): Observable<IBuddy[]> {
        return this._http.get(this._buddyUrl)
            .map((response: Response) => <IBuddy[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getBuddie(userName: string): Observable<IBuddy> {
        return this.getBuddies()
            .map((buddies: IBuddy[]) => buddies.find(b => b.userName === userName));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}