import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderExampleComponent } from './calender-example.component';

describe('CalenderExampleComponent', () => {
  let component: CalenderExampleComponent;
  let fixture: ComponentFixture<CalenderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
