import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseover") enter() {
    this.highlight("red");
    //this.el.nativeElement.style.backgroundColor="red";
  }
  @HostListener("mouseout") out() {
    //this.el.nativeElement.style.backgroundColor="yellow";
    this.highlight("blue");
  }
  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
