import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringListComponent } from './tutoring-list.component';

describe('TutoringListComponent', () => {
  let component: TutoringListComponent;
  let fixture: ComponentFixture<TutoringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
