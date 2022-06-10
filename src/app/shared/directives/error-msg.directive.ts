import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-message]'
})
export class ErrorMsgDirective implements OnInit{
  private _color: string = 'red';
  private _message: string = 'This field is required';
  private _hidden: boolean = true;
  public element: HTMLElement;
  
  @Input() set color(colorValue: string){
    this._color = colorValue;
    this.setColor();
  }
  @Input() set message(value: string){
    this.message = value;
    this.setMessage();
  };
  @Input() set display(value: boolean){
    this._hidden = value;
    this.setHidden();
  };
  @Input() class: string = '';

  constructor(private el: ElementRef<HTMLElement>) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.setClasses();
    this.setColor();
    this.setMessage();
    this.setHidden();
  }

  setClasses():void {
    this.element.className = `${this.class} form-text`
  }
  setMessage():void {
    this.element.innerText = this._message;
  }
  setColor():void {
    this.element.style.color = this._color
  }
  setHidden(){
    if(this._hidden){
      this.element.classList.remove('hidden')
    }else {
      this.element.classList.add('hidden')
    }
  }
}
