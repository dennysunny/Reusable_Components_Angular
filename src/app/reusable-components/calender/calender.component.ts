import { Component, Input} from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})

export class CalenderComponent {

  @Input() selectedDate = new Date()
  date: Date | undefined;
  
 
  }


  
  


