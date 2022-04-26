import { TestBed } from '@angular/core/testing';

import { AbntService } from './abnt.service';

describe('AbntService', () => {
  let service: AbntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
