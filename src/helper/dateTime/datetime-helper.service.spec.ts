import { TestBed } from '@angular/core/testing';

import { DatetimeHelperService } from './datetime-helper.service';

describe('DatetimeHelperService', () => {
  let service: DatetimeHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatetimeHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
