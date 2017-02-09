/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GagaComponent } from './gaga.component';

describe('GagaComponent', () => {
  let component: GagaComponent;
  let fixture: ComponentFixture<GagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
