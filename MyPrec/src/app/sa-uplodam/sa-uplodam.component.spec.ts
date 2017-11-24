import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaUplodamComponent } from './sa-uplodam.component';

describe('SaUplodamComponent', () => {
  let component: SaUplodamComponent;
  let fixture: ComponentFixture<SaUplodamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaUplodamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaUplodamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
