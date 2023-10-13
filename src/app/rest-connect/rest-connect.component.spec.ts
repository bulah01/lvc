import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestConnectComponent } from './rest-connect.component';

describe('RestConnectComponent', () => {
  let component: RestConnectComponent;
  let fixture: ComponentFixture<RestConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestConnectComponent]
    });
    fixture = TestBed.createComponent(RestConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
