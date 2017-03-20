import { FormControl } from '@angular/forms';

export function DateValidator(control: FormControl): {[key: string]: any} {
  var dateRegexp = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
  if (control.value && !dateRegexp.test(control.value)) {
    return { invalidDate: true };
  } else if (dateRegexp.test(control.value)){
    var userDate = new Date(control.value);
    var currentDate = new Date(), 
        yearsConvertor = 31536000000;
    if(currentDate < userDate){
        return { invalidDate: true };
    } else {
        var ageOfUser = Math.round(((+currentDate) - (+userDate)) / yearsConvertor);
        if(ageOfUser < 14 || ageOfUser > 150){
            return { invalidDate: true };
        }
    }
    //control.value = userDate.toISOString();
  }
}