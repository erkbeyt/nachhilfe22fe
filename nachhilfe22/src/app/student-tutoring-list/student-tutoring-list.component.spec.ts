import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTutoringListComponent } from './student-tutoring-list.component';

describe('StudentTutoringListComponent', () => {
  let component: StudentTutoringListComponent;
  let fixture: ComponentFixture<StudentTutoringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTutoringListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTutoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
