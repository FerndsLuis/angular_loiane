import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    console.log(this._elementRef);
    //_elementRef.nativeElement.style.backgroundColor = 'yellow'; não é a melhor prática, risco de hacker
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
