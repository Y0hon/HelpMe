import { TestBed } from '@angular/core/testing';

import { ApiHelpMeBrokerService } from './api-help-me-broker.service';

describe('ApiHelpMeBrokerService', () => {
  let service: ApiHelpMeBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHelpMeBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
