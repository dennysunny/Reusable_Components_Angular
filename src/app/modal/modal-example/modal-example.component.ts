import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent implements OnInit {

  modalOpen= false


  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
   this.modalOpen = !this.modalOpen
  }
}
