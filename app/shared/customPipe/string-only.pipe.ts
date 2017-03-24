import {Pipe, PipeTransform} from "@angular/core"

export class StringOnlyPipe implements PipeTransform {
    transform(inputStr:string){
        if(inputStr === undefined || inputStr === ""){
            return inputStr
        } else {
            return inputStr.replace(/\d+/g,"");
        }
    }
}