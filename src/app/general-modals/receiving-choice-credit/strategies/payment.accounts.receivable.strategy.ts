import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentStrategy } from '../models/payment-strategy.interface';

@Injectable()
export class PaymentAccountsReceivableStrategy implements PaymentStrategy {
  constructor() {
    this.execute();
  }

  execute(): void {
    console.log('contas a receber');
  }
}
