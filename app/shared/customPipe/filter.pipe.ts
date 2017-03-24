import {Pipe, PipeTransform} from "@angular/core"

class FilterPipe implements PipeTransform {

    transform(filterObjects:any, filterStr: any){
        if(filterStr === undefined || filterStr === ""){
            return filterObjects
        } else {
            return filterObjects.filter(function(filterObject:any){
                return filterObject.firstName.toLowercase().include(filterStr.toLowercase());
            });
        }
    }
}