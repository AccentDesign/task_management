import { AfterViewInit, Directive, ElementRef } from '@angular/core';
 
@Directive({
  selector: 'autoFocus, [autoFocus]'
})
export class AutofocusDirective implements AfterViewInit {

    constructor(private el: ElementRef) { }
    
    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
}