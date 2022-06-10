import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(show: boolean){
    console.log('View ref', this.viewContainerRef.element.nativeElement);
    if(show){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else {
      this.viewContainerRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<HTMLElement>, private viewContainerRef: ViewContainerRef) {}

}
