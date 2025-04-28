import { TestBed } from '@angular/core/testing';

import { PaymentAccountsReceivableService } from './payment-accounts-receivable.service';

describe('PaymentAccountsReceivableService', () => {
  let service: PaymentAccountsReceivableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentAccountsReceivableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
