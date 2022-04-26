import { TestBed } from '@angular/core/testing';

import { BibvirtuaisService } from './bibvirtuais.service';

describe('BibvirtuaisService', () => {
  let service: BibvirtuaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibvirtuaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
