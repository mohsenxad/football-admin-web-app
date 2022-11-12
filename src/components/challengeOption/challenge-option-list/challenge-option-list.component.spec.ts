import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOptionListComponent } from './challenge-option-list.component';

describe('ChallengeOptionListComponent', () => {
  let component: ChallengeOptionListComponent;
  let fixture: ComponentFixture<ChallengeOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeOptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
