import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixModel1Component } from './choix-model1.component';

describe('ChoixModel1Component', () => {
  let component: ChoixModel1Component;
  let fixture: ComponentFixture<ChoixModel1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixModel1Component]
    });
    fixture = TestBed.createComponent(ChoixModel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
