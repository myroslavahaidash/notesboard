import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit()
  {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }

}
