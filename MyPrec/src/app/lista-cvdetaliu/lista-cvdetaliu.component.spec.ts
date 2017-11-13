import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCvdetaliuComponent } from './lista-cvdetaliu.component';

describe('ListaCvdetaliuComponent', () => {
  let component: ListaCvdetaliuComponent;
  let fixture: ComponentFixture<ListaCvdetaliuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCvdetaliuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCvdetaliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
