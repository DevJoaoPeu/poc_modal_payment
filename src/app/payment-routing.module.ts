import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChooseModalPaymentMethodComponent } from './choose-modal-payment-method/choose-modal-payment-method.component';
import { ReceivingChoiceCreditComponent } from './general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from './general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoicePixComponent } from './general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { ReceivingChoiceMoneyComponent } from './general-modals/receiving-choice-money/receiving-choice-money.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentRootComponent } from './payment.root.component';
import { MatDialogModule } from '@angular/material/dialog';

export const paymentRouting = [
  {
    path: '',
    component: PaymentRootComponent,
    children: [
      { path: 'credito', component: ReceivingChoiceCreditComponent },
      { path: 'debito', component: ReceivingChoiceDebitComponent },
      { path: 'pix', component: ReceivingChoicePixComponent },
      { path: 'dinheiro', component: ReceivingChoiceMoneyComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChooseModalPaymentMethodComponent,
    ReceivingChoiceCreditComponent,
    ReceivingChoiceDebitComponent,
    ReceivingChoicePixComponent,
    ReceivingChoiceMoneyComponent,
    RouterModule.forChild(paymentRouting),
    ReactiveFormsModule,
    PaymentRootComponent,
    MatDialogModule,
  ],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
