import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'textarea[autoResize]'
})
export class AutoResizeDirective implements AfterViewInit {

    constructor(private element: ElementRef) { }

    @Input('autoResize') maxHeight: number;

    @HostListener('input', ['$event.target'])
    onInput(textArea: HTMLTextAreaElement): void {
        this.adjust();
    }

    ngAfterViewInit() {
        this.adjust();
    }

    adjust(): void {
        const ta = this.element.nativeElement;
        let newHeight;
        if (ta) {
            ta.style.overflow = 'hidden';
            ta.style.height = 'auto';
            if (this.maxHeight) {
                newHeight = Math.min(ta.scrollHeight, this.maxHeight);
            } else {
                newHeight = ta.scrollHeight;
            }
            ta.style.height = newHeight + 'px';
        }
    }

}
