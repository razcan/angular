import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCvComponent } from './input-cv.component';

describe('InputCvComponent', () => {
  let component: InputCvComponent;
  let fixture: ComponentFixture<InputCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
