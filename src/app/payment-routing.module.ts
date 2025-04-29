import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ChooseModalPaymentMethodComponent } from './choose-modal-payment-method/choose-modal-payment-method.component';
import { ReceivingChoiceCreditComponent } from './general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from './general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoicePixComponent } from './general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { ReceivingChoiceMoneyComponent } from './general-modals/receiving-choice-money/receiving-choice-money.component';

@NgModule({
  declarations: [
    ChooseModalPaymentMethodComponent,
    ReceivingChoiceCreditComponent,
    ReceivingChoiceDebitComponent,
    ReceivingChoicePixComponent,
    ReceivingChoiceMoneyComponent,
  ],
  imports: [CommonModule],
})
export class PaymentRoutingModule {
  routes: Routes = [
    {
      path: 'pagamentos',
      loadChildren: () =>
        import('./payment.module').then((m) => m.PaymentModule),
    },
  ];
}
