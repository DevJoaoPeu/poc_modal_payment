import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountsPayableComponent } from './modal-accounts-payable.component';

describe('ModalAccountsPayableComponent', () => {
  let component: ModalAccountsPayableComponent;
  let fixture: ComponentFixture<ModalAccountsPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAccountsPayableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAccountsPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
