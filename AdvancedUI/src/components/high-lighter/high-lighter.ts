import { Directive, ElementRef, Input } from '@angular/core';

/*
  Generated class for the HighLighter directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[high-lighter]' // Attribute selector
})
export class HighLighter {

  constructor(public el: ElementRef) {
      console.log('HighLighter is created...');
  }

  ngOnInit(){
    console.log('ngOnInit is called...');
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
