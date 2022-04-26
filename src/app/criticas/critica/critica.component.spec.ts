import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaComponent } from './critica.component';

describe('CriticaComponent', () => {
  let component: CriticaComponent;
  let fixture: ComponentFixture<CriticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
