import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionWindowComponent } from './collection-window.component';

describe('CollectionWindowComponent', () => {
  let component: CollectionWindowComponent;
  let fixture: ComponentFixture<CollectionWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
