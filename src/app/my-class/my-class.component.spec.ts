/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyClassComponent } from './my-class.component';

describe('MyClassComponent', () => {
  let component: MyClassComponent;
  let fixture: ComponentFixture<MyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
