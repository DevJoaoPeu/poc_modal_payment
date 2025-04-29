import { FormGroup } from '@angular/forms';
import { Account } from '../../../shared/interfaces/account.current.interface';
import { Observable } from 'rxjs';

export interface PaymentStrategy {
  execute(): void;
  defineCurrentAccounts(tefIsActive: boolean): Observable<Account[]>;
}
