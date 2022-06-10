import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {
  colorForMessage: string = 'purple';

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  inputIsValid(input: string): boolean {
    return !!this.myForm.get(input)?.errors && this.myForm.controls[input].touched
  }

  changeColor():void{
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.colorForMessage = color;
  }

}
