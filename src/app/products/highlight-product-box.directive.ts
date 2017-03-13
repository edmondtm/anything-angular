import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[anyHighlightProductBox]'
})
export class HighlightProductBoxDirective {


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#F0755A');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.borderColor = color;
  }


}
