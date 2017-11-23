import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaUploadamComponent } from './sa-uploadam.component';

describe('SaUploadamComponent', () => {
  let component: SaUploadamComponent;
  let fixture: ComponentFixture<SaUploadamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaUploadamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaUploadamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
