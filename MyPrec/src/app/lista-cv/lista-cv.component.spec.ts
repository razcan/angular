import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCvComponent } from './lista-cv.component';

describe('ListaCvComponent', () => {
  let component: ListaCvComponent;
  let fixture: ComponentFixture<ListaCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
