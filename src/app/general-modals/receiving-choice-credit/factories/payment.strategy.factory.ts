import { Injectable } from '@angular/core';
import { CheckinPaymentStrategy } from '../strategies/checkin.payment.strategy';
import { PaymentAccountsReceivableStrategy } from '../strategies/payment.accounts.receivable.strategy';
import { ProposedPaymentStrategy } from '../strategies/proposed.payment.strategy';
import { TypeComponentOrigin } from '../../../shared/enums/type.component.origin.enum';

@Injectable()
export class PaymentStrategyFactory {
  constructor(
    private checkinPaymentStrategy: CheckinPaymentStrategy,
    private paymentAccountsReceivableStrategy: PaymentAccountsReceivableStrategy,
    private proposedPaymentStrategy: ProposedPaymentStrategy
  ) {}

  getStrategy(origin: TypeComponentOrigin) {
    switch (origin) {
      case TypeComponentOrigin.CHECKIN:
        return this.checkinPaymentStrategy;
      case TypeComponentOrigin.ACCOUNTS_RECEIVABLE:
        return this.paymentAccountsReceivableStrategy;
      case TypeComponentOrigin.PROPOSAL:
        return this.proposedPaymentStrategy;
      default:
        throw new Error('Unknown origin for PaymentStrategy.');
    }
  }
}
