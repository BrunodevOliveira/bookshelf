import { TestBed } from '@angular/core/testing';

import { BasedadosService } from './basedados.service';

describe('BasedadosService', () => {
  let service: BasedadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasedadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
