import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasDialogoComponent } from './sagas-dialogo.component';

describe('SagasDialogoComponent', () => {
  let component: SagasDialogoComponent;
  let fixture: ComponentFixture<SagasDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagasDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagasDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
