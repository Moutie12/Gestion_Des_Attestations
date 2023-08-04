import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choix1Component } from './choix1.component';

describe('Choix1Component', () => {
  let component: Choix1Component;
  let fixture: ComponentFixture<Choix1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Choix1Component]
    });
    fixture = TestBed.createComponent(Choix1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
