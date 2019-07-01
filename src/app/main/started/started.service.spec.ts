import { TestBed } from '@angular/core/testing';

import { StartedService } from './started.service';

describe('StartedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartedService = TestBed.get(StartedService);
    expect(service).toBeTruthy();
  });
});
