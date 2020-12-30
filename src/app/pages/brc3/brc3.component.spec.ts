import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brc3Component } from './brc3.component';

describe('Brc3Component', () => {
  let component: Brc3Component;
  let fixture: ComponentFixture<Brc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
