import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreEtudinatsComponent } from './nombre-etudinats.component';

describe('NombreEtudinatsComponent', () => {
  let component: NombreEtudinatsComponent;
  let fixture: ComponentFixture<NombreEtudinatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreEtudinatsComponent]
    });
    fixture = TestBed.createComponent(NombreEtudinatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
