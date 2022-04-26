import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecuperarComponent } from './app-recuperar.component';

describe('AppRecuperarComponent', () => {
  let component: AppRecuperarComponent;
  let fixture: ComponentFixture<AppRecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRecuperarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
