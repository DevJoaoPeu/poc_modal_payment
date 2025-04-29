import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentStrategy } from '../models/payment-strategy.interface';
import { Account } from '../../../shared/interfaces/account.current.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class PaymentAccountsReceivableStrategy implements PaymentStrategy {
  private readonly accountsTef: Account[] = [
    { value: 1, label: 'Contas a receber TEF 1' },
    { value: 2, label: 'Contas a receber  TEF 2' },
  ];
  private readonly accountsNotTef: Account[] = [
    { value: 1, label: 'Contas a receber NÃO TEF 1' },
    { value: 2, label: 'Contas a receber NÃO TEF 2' },
  ];

  constructor() {
    this.execute();
  }

  execute(): void {}

  defineCurrentAccounts(tefIsActive: boolean): Observable<Account[]> {
    return tefIsActive ? of(this.accountsTef) : of(this.accountsNotTef);
  }
}
