import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfComponent } from './uploadf.component';

describe('UploadfComponent', () => {
  let component: UploadfComponent;
  let fixture: ComponentFixture<UploadfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadfComponent]
    });
    fixture = TestBed.createComponent(UploadfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
