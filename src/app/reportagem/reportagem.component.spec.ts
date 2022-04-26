import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportagemComponent } from './reportagem.component';

describe('ReportagemComponent', () => {
  let component: ReportagemComponent;
  let fixture: ComponentFixture<ReportagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
