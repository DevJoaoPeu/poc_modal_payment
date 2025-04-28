import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class PaymentAccountsReceivableStrategy {
  constructor() {
    this.execute();
  }

  execute(): void {
    console.log('contas a receber');
  }
}
