import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaDialogoComponent } from './critica-dialogo.component';

describe('CriticaDialogoComponent', () => {
  let component: CriticaDialogoComponent;
  let fixture: ComponentFixture<CriticaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticaDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
