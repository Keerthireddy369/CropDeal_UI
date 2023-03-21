import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerviewComponent } from './dealerview.component';

describe('DealerviewComponent', () => {
  let component: DealerviewComponent;
  let fixture: ComponentFixture<DealerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
