import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedadosComponent } from './basedados.component';

describe('BasedadosComponent', () => {
  let component: BasedadosComponent;
  let fixture: ComponentFixture<BasedadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasedadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasedadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
