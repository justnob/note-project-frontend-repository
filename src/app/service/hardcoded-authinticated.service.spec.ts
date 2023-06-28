import { TestBed } from '@angular/core/testing';

import { HardcodedAuthinticatedService } from './hardcoded-authinticated.service';

describe('HardcodedAuthinticatedService', () => {
  let service: HardcodedAuthinticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthinticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
