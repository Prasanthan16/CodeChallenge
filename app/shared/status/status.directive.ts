import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[statusSign]'
})
export class StatusDirective {
  // @Input('statusSign') statusSign: string;
  @Input('myHighlight') bgColor: string;
  constructor(private el: ElementRef) { 
    this.el = el;
    switch (this.bgColor) {
      case 'OFFLINE':
        this.el.nativeElement.style.backgroundColor = "#DCDCDC";
        break;
      case 'IDLE':
        this.el.nativeElement.style.backgroundColor = "yellow";
        break;
      case 'IDLE':
        this.el.nativeElement.style.backgroundColor = "#FF0000";
        break;
      case 'AVAILABLE':
        this.el.nativeElement.style.backgroundColor = "#ADFF2F";
        break;
      default:
        this.el.nativeElement.style.backgroundColor = "black";
        break;
    }
  }
 
  // set bgColor(status:string){
  //   switch (status) {
  //     case 'OFFLINE':
  //       this.el.nativeElement.style.backgroundColor = "#DCDCDC";
  //       break;
  //     case 'IDLE':
  //       this.el.nativeElement.style.backgroundColor = "yellow";
  //       break;
  //     case 'IDLE':
  //       this.el.nativeElement.style.backgroundColor = "#FF0000";
  //       break;
  //     case 'AVAILABLE':
  //       this.el.nativeElement.style.backgroundColor = "#ADFF2F";
  //       break;
  //     default:
  //       this.el.nativeElement.style.backgroundColor = "black";
  //       break;
  //   }
  // }
}