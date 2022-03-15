import {
  Directive,
  HostListener,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {
  @HostListener('mouseenter') onMouseHover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.background-color') backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
