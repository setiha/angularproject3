import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintLisComponent } from './complaint-list.component';

describe('ComplaintLisComponent', () => {
  let component: ComplaintLisComponent;
  let fixture: ComponentFixture<ComplaintLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
