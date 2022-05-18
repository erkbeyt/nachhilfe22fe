import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringDetailsComponent } from './tutoring-details.component';

describe('TutoringDetailsComponent', () => {
  let component: TutoringDetailsComponent;
  let fixture: ComponentFixture<TutoringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
