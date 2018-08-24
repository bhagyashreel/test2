import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Working1Component } from './working1.component';

describe('Working1Component', () => {
  let component: Working1Component;
  let fixture: ComponentFixture<Working1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Working1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Working1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
