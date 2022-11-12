import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOptionListItemComponent } from './challenge-option-list-item.component';

describe('ChallengeOptionListItemComponent', () => {
  let component: ChallengeOptionListItemComponent;
  let fixture: ComponentFixture<ChallengeOptionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeOptionListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeOptionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
