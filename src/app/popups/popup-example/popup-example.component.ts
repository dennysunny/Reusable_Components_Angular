import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-example',
  templateUrl: './popup-example.component.html',
  styleUrls: ['./popup-example.component.css'],
})
export class PopupExampleComponent {
  isOpen: boolean = true;
  Confirmation = '';
  Message = '';
  PositiveAction = '';
  NegetiveAction = '  ';
  clickStatus!: string;

  handleOkayClick() {
    this.isOpen = false;
    this.clickStatus = 'clicked okay';
  }

  handleCancelClick() {
    this.isOpen = false;
    this.clickStatus = 'clicked cancel';
  }
}
