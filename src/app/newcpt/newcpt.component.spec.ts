import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcptComponent } from './newcpt.component';

describe('NewcptComponent', () => {
  let component: NewcptComponent;
  let fixture: ComponentFixture<NewcptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
