import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderExampleComponent } from './placeholder-example.component';

describe('PlaceholderExampleComponent', () => {
  let component: PlaceholderExampleComponent;
  let fixture: ComponentFixture<PlaceholderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
