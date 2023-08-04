import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherInfoComponent } from './afficher-info.component';

describe('AfficherInfoComponent', () => {
  let component: AfficherInfoComponent;
  let fixture: ComponentFixture<AfficherInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherInfoComponent]
    });
    fixture = TestBed.createComponent(AfficherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
