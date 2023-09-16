import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-normal',
  templateUrl: './table-normal.component.html',
  styleUrls: ['./table-normal.component.css']
})
export class TableNormalComponent implements OnInit {

  @Input() data :any;
  @Input() headers :any;
  @Input() classNames ='';

    constructor() { }

    ngOnInit(): void {
    }

}
