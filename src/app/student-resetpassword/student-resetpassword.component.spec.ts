import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResetpasswordComponent } from './student-resetpassword.component';

describe('StudentResetpasswordComponent', () => {
  let component: StudentResetpasswordComponent;
  let fixture: ComponentFixture<StudentResetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
