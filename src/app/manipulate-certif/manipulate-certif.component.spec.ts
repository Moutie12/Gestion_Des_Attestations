import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateCertifComponent } from './manipulate-certif.component';

describe('ManipulateCertifComponent', () => {
  let component: ManipulateCertifComponent;
  let fixture: ComponentFixture<ManipulateCertifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManipulateCertifComponent]
    });
    fixture = TestBed.createComponent(ManipulateCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
