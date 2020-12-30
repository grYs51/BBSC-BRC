import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbaraddpersonComponent } from './snackbaraddperson.component';

describe('SnackbaraddpersonComponent', () => {
  let component: SnackbaraddpersonComponent;
  let fixture: ComponentFixture<SnackbaraddpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbaraddpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbaraddpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
