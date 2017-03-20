import { FormControl } from '@angular/forms';

export function ProperStatus(control: FormControl)  {
  var statusReg = /^((IDLE)|(OFFLINE)|(BUSY)|(AVAILABLE)) $/;
  if (control.value && !statusReg.test(control.value)) {
    return { invalidStatus: true };
  } 
}
