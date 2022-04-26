import { TestBed } from '@angular/core/testing';

import { CriticaDialogoService } from './critica-dialogo.service';

describe('CriticaDialogoService', () => {
  let service: CriticaDialogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticaDialogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
