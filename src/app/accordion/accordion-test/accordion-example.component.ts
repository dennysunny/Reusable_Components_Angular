import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.css']
})
export class AccordionExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
    // Object 1
{
  title: 'Why are BMW cars known for their performance?',
  content: 'BMW cars are renowned for their exceptional performance due to their powerful engines, advanced engineering, and precision tuning.'
},

// Object 2
{
  title: 'What sets Kawasaki motorcycles apart from the competition?',
  content: 'Kawasaki motorcycles are known for their cutting-edge technology, impressive horsepower, and innovative designs, making them stand out in the market.'
},

// Object 3
{
  title: 'Why do VW cars have a strong reputation for reliability?',
  content: 'VW cars have earned a reputation for reliability thanks to their robust engineering, stringent quality control, and long-lasting components.'
},

// Object 4
{
  title: 'What makes BMW bikes popular among riders?',
  content: 'BMW motorcycles are favored by riders for their agility, exceptional handling, and the thrill they provide on both urban streets and winding roads.'
},

// Object 5
{
  title: 'What are the key features of Kawasaki sport bikes?',
  content: 'Kawasaki sport bikes are known for their sporty aesthetics, powerful engines, and cutting-edge technology, making them a top choice for enthusiasts.'
}


  ]
}
