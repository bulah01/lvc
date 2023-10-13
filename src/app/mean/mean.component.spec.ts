import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEANComponent } from './mean.component';

describe('MEANComponent', () => {
  let component: MEANComponent;
  let fixture: ComponentFixture<MEANComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEANComponent]
    });
    fixture = TestBed.createComponent(MEANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
