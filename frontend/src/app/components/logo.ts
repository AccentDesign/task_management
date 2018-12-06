import { Component, Input } from '@angular/core';

@Component({
    selector: 'logo, [logo]',
    template: `
    <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 114 114" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
        <title>Logo Check</title>
        <desc>Created with Sketch.</desc>
        <g id="Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Logo-Check-Green" transform="translate(56.568542, 56.568542) rotate(-45.000000) translate(-56.568542, -56.568542) translate(16.568542, 16.568542)">
                <rect id="Rectangle" fill="#A2CF6E" x="0" y="0" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-3" fill="#618833" x="0" y="20" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-7" fill="#618833" x="0" y="40" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-8" fill="#8BC34A" x="0" y="60" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-9" fill="#8BC34A" x="20" y="60" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-10" fill="#A2CF6E" x="40" y="60" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-11" fill="#A2CF6E" x="60" y="60" width="20" height="20"></rect>
                <rect id="Rectangle-Copy" fill="#A2CF6E" x="20" y="0" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-12" fill="#FFFFFF" x="20" y="20" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-13" fill="#FFFFFF" x="20" y="40" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-14" fill="#FFFFFF" x="40" y="40" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-15" fill="#FFFFFF" x="60" y="40" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-2" fill="#8BC34A" x="40" y="0" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-6" fill="#618833" x="40" y="20" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-4" fill="#8BC34A" x="60" y="0" width="20" height="20"></rect>
                <rect id="Rectangle-Copy-5" fill="#618833" x="60" y="20" width="20" height="20"></rect>
            </g>
        </g>
    </svg>
    `
})

export class LogoComponent {
    @Input() width: string = '114px';
    @Input() height: string = '116px';
}