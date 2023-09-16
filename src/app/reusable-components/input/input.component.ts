import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() data: any = "";
  @Output() postComment: EventEmitter<any> = new EventEmitter();

  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  fontSize: number = 16; 

  onSubmitComment() {
    this.postComment.emit(this.data);

  }

  adjustTextareaSize(){

  }

}
