import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpInpComponent } from './exp-inp.component';

describe('ExpInpComponent', () => {
  let component: ExpInpComponent;
  let fixture: ComponentFixture<ExpInpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpInpComponent]
    });
    fixture = TestBed.createComponent(ExpInpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
