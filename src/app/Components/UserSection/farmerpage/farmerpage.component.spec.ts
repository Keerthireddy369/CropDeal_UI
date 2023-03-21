import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerpageComponent } from './farmerpage.component';

describe('FarmerpageComponent', () => {
  let component: FarmerpageComponent;
  let fixture: ComponentFixture<FarmerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
