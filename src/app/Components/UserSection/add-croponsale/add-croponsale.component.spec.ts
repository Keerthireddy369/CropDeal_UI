import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCroponsaleComponent } from './add-croponsale.component';

describe('AddCroponsaleComponent', () => {
  let component: AddCroponsaleComponent;
  let fixture: ComponentFixture<AddCroponsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCroponsaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCroponsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
