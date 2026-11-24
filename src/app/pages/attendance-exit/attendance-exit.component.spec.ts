import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceExitComponent } from './attendance-exit.component';

describe('AttendanceExitComponent', () => {
  let component: AttendanceExitComponent;
  let fixture: ComponentFixture<AttendanceExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceExitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
