import { TestBed } from '@angular/core/testing';

import { ArtesService } from './artes.service';

describe('ArtesService', () => {
  let service: ArtesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
