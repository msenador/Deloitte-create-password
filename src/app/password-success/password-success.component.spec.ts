import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSuccessComponent } from './password-success.component';

describe('PasswordSuccessComponent', () => {
  let component: PasswordSuccessComponent;
  let fixture: ComponentFixture<PasswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
