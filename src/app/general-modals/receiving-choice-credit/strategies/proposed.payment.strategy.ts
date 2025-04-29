import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentStrategy } from '../models/payment-strategy.interface';
import { Account } from '../../../shared/interfaces/account.current.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProposedPaymentStrategy implements PaymentStrategy {
  private readonly accountsTef: Account[] = [
    { value: 1, label: 'proposta TEF 1' },
    { value: 2, label: 'proposta TEF 2' },
  ];
  private readonly accountsNotTef: Account[] = [
    { value: 1, label: 'proposta NÃO TEF 1' },
    { value: 2, label: 'proposta NÃO TEF 2' },
  ];

  execute(): void {
    console.log('proposto');
  }

  defineCurrentAccounts(tefIsActive: boolean): Observable<Account[]> {
    return tefIsActive ? of(this.accountsTef) : of(this.accountsNotTef);
  }
}
