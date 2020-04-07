import { TestBed } from '@angular/core/testing';

import { SviServisiService } from './svi-servisi.service';

describe('SviServisiService', () => {
  let service: SviServisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SviServisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
