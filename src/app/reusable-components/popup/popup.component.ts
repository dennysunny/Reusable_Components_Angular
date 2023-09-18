import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup..component.html',
  styleUrls: ['./popup.component.css'],
  
})
export class PopupComponent  {

  //default titles
  @Input() popupHeader = "Confirmation"
  @Input() popupMessage = "Are you sure you want to proceed?"
  @Input() popupPositiveButton = "Okay"
  @Input() popupNegetiveButton = "Cancel"

  @Output() okayClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();


  onOkayClick() {
    this.okayClicked.emit();
    
  }

  onCancelClick() {
    this.cancelClicked.emit();
  }
}
