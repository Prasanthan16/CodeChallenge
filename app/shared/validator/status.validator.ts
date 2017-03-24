import { FormControl } from '@angular/forms';

export function ProperStatus(control: FormControl)  {
  var statusArray = ["IDLE", "OFFLINE", "BUSY", "AVAILABLE", "AWAY"];
  if (control.value && statusArray.indexOf(control.value.toUpperCase()) === -1) {
    return { invalidStatus: true };
  } 
}
