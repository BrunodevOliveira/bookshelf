import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbntComponent } from './abnt.component';

describe('AbntComponent', () => {
  let component: AbntComponent;
  let fixture: ComponentFixture<AbntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
