import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroponsaleComponent } from './croponsale.component';

describe('CroponsaleComponent', () => {
  let component: CroponsaleComponent;
  let fixture: ComponentFixture<CroponsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroponsaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroponsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
