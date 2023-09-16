import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsExampleComponent } from './statistics-example.component';

describe('StatisticsExampleComponent', () => {
  let component: StatisticsExampleComponent;
  let fixture: ComponentFixture<StatisticsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
