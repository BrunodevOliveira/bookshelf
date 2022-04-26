import { TestBed } from '@angular/core/testing';

import { NavegacaoBibliService } from './navegacao-bibli.service';

describe('NavegacaoBibliService', () => {
  let service: NavegacaoBibliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavegacaoBibliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
