import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListExampleComponent } from './items-list-example.component';

describe('ItemsListExampleComponent', () => {
  let component: ItemsListExampleComponent;
  let fixture: ComponentFixture<ItemsListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
