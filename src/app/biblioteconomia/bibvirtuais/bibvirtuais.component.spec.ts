import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibvirtuaisComponent } from './bibvirtuais.component';

describe('BibvirtuaisComponent', () => {
  let component: BibvirtuaisComponent;
  let fixture: ComponentFixture<BibvirtuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibvirtuaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibvirtuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
