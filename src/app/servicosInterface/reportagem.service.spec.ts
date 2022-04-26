import { TestBed } from '@angular/core/testing';

import { ReportagemService } from './reportagem.service';

describe('ReportagemService', () => {
  let service: ReportagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
