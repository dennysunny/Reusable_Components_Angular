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

  Message = 'Do you want to post the message?';
  PositiveAction = 'Post';
  NegetiveAction = 'Discrad';
  clickStatus!: string;

  openPopUp: boolean = false;

  onSubmitComment() {
    this.postComment.emit(this.data);
    this.openPopUp = true
  }

  adjustTextareaSize(){

  }

  handleOkayClick() {
    this.openPopUp = false;
    this.clickStatus = 'clicked okay';
  }

  handleCancelClick() {
    this.openPopUp = false;
    this.clickStatus = 'clicked cancel';
  }
  
}


