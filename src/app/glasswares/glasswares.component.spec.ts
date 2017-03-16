/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlasswaresComponent } from './glasswares.component';

describe('GlasswaresComponent', () => {
  let component: GlasswaresComponent;
  let fixture: ComponentFixture<GlasswaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlasswaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasswaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
