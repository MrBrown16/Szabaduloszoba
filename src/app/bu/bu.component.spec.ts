import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuComponent } from './bu.component';

describe('BuComponent', () => {
  let component: BuComponent;
  let fixture: ComponentFixture<BuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuComponent]
    });
    fixture = TestBed.createComponent(BuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
