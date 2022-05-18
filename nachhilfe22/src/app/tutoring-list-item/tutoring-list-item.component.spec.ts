import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringListItemComponent } from './tutoring-list-item.component';

describe('TutoringListItemComponent', () => {
  let component: TutoringListItemComponent;
  let fixture: ComponentFixture<TutoringListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
