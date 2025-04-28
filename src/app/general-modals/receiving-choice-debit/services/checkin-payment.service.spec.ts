import { TestBed } from '@angular/core/testing';

import { CheckinPaymentService } from './checkin-payment.service';

describe('CheckinPaymentService', () => {
  let service: CheckinPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
