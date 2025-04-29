import { Injectable, Injector } from '@angular/core';
import { CheckinPaymentStrategy } from '../strategies/checkin.payment.strategy';
import { PaymentAccountsReceivableStrategy } from '../strategies/payment.accounts.receivable.strategy';
import { ProposedPaymentStrategy } from '../strategies/proposed.payment.strategy';
import { TypeComponentOrigin } from '../../../shared/enums/type.component.origin.enum';

@Injectable()
export class PaymentStrategyFactory {
  constructor(private injector: Injector) {}

  getStrategy(origin: TypeComponentOrigin) {
    switch (origin) {
      case TypeComponentOrigin.CHECKIN:
        return this.injector.get(CheckinPaymentStrategy);
      case TypeComponentOrigin.ACCOUNTS_RECEIVABLE:
        return this.injector.get(PaymentAccountsReceivableStrategy);
      case TypeComponentOrigin.PROPOSAL:
        return this.injector.get(ProposedPaymentStrategy);
      default:
        throw new Error('Unknown origin for PaymentStrategy.');
    }
  }
}
