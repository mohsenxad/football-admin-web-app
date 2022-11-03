import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChallengePanelComponent } from './user-challenge-panel.component';

describe('UserChallengePanelComponent', () => {
  let component: UserChallengePanelComponent;
  let fixture: ComponentFixture<UserChallengePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChallengePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChallengePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
