import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseModalPaymentMethodComponent } from './choose-modal-payment-method.component';

describe('ChooseModalPaymentMethodComponent', () => {
  let component: ChooseModalPaymentMethodComponent;
  let fixture: ComponentFixture<ChooseModalPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseModalPaymentMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseModalPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
