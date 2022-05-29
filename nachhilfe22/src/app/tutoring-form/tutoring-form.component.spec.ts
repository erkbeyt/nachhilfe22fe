import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringFormComponent } from './tutoring-form.component';

describe('TutoringFormComponent', () => {
  let component: TutoringFormComponent;
  let fixture: ComponentFixture<TutoringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
