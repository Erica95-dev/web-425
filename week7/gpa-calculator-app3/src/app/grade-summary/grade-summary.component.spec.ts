
/*
 * Title: grade-summary.component.spec
 * Author: Erica Perry
 * Date: Feb  9 2021
 * Description:  grade-summary.compontent */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
