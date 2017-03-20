import { BUDDIES } from '../../api/buddy/buddy.details';
import {Injectable}  from '@angular/core';

@Injectable()
export class BuddyService {
    getBuddies(){
        return Promise.resolve(BUDDIES);
    }
}