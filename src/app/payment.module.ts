import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseModalPaymentMethodComponent } from './choose-modal-payment-method/choose-modal-payment-method.component';
import { ReceivingChoiceCreditComponent } from './general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from './general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoicePixComponent } from './general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { ReceivingChoiceMoneyComponent } from './general-modals/receiving-choice-money/receiving-choice-money.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class PaymentModule {
  routes: Routes = [
    {
      path: '/',
      component: ChooseModalPaymentMethodComponent,
      children: [
        { path: '/', component: AppComponent },
        { path: '/credito', component: ReceivingChoiceCreditComponent },
        { path: '/debito', component: ReceivingChoiceDebitComponent },
        { path: '/pix', component: ReceivingChoicePixComponent },
        { path: '/dinheiro', component: ReceivingChoiceMoneyComponent },
      ],
    },
  ];
}
