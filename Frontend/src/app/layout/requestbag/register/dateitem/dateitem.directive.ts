import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class DateitemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
