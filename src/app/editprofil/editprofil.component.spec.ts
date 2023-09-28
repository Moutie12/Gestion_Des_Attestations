import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilComponent } from './editprofil.component';

describe('EditprofilComponent', () => {
  let component: EditprofilComponent;
  let fixture: ComponentFixture<EditprofilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprofilComponent]
    });
    fixture = TestBed.createComponent(EditprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
