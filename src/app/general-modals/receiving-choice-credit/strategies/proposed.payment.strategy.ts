import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentStrategy } from '../models/payment-strategy.interface';

@Injectable()
export class ProposedPaymentStrategy implements PaymentStrategy {
  execute(): void {
    console.log('proposto');
  }
}
