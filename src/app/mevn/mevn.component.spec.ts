import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEVNComponent } from './mevn.component';

describe('MEVNComponent', () => {
  let component: MEVNComponent;
  let fixture: ComponentFixture<MEVNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEVNComponent]
    });
    fixture = TestBed.createComponent(MEVNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
