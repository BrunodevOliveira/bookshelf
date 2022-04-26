import { TestBed } from '@angular/core/testing';

import { SagasDialogoService } from './sagas-dialogo.service';

describe('SagasDialogoService', () => {
  let service: SagasDialogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SagasDialogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
