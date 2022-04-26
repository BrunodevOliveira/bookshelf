import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasComponent } from './sagas.component';

describe('SagasComponent', () => {
  let component: SagasComponent;
  let fixture: ComponentFixture<SagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
