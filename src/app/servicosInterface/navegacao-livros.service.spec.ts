import { TestBed } from '@angular/core/testing';

import { NavegacaoLivrosService } from './navegacao-livros.service';

describe('NavegacaoLivrosService', () => {
  let service: NavegacaoLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavegacaoLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
