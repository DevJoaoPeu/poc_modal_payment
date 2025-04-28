import { TestBed } from '@angular/core/testing';

import { ProposedPaymentService } from './proposed-payment.service';

describe('ProposedPaymentService', () => {
  let service: ProposedPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposedPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
