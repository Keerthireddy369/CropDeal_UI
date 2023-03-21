import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDealerComponent } from './update-dealer.component';

describe('UpdateDealerComponent', () => {
  let component: UpdateDealerComponent;
  let fixture: ComponentFixture<UpdateDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
