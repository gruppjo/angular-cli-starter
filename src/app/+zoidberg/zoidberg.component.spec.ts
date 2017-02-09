/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZoidbergComponent } from './zoidberg.component';

describe('ZoidbergComponent', () => {
  let component: ZoidbergComponent;
  let fixture: ComponentFixture<ZoidbergComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoidbergComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoidbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
