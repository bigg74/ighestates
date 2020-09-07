import { TestBed } from '@angular/core/testing';

import { GetLogListService } from './get-log-list.service';

describe('GetLogListService', () => {
  let service: GetLogListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLogListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
