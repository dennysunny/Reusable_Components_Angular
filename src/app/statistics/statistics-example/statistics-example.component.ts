import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-example',
  templateUrl: './statistics-example.component.html',
  styleUrls: ['./statistics-example.component.css']
})
export class StatisticsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stats =[
    {value:220,label:'# of Users'},
    {value:9000, label:'Revenue'},
    {value:570, label:'Reviews'},
  ]

}
