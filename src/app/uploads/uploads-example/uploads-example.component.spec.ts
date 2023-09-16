import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsExampleComponent } from './uploads-example.component';

describe('UploadsExampleComponent', () => {
  let component: UploadsExampleComponent;
  let fixture: ComponentFixture<UploadsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
