import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseModalPaymentMethodComponent } from './choose-modal-payment-method/choose-modal-payment-method.component';
import { ReceivingChoiceCreditComponent } from './general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from './general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoicePixComponent } from './general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { ReceivingChoiceMoneyComponent } from './general-modals/receiving-choice-money/receiving-choice-money.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PaymentRoutingModule } from './payment-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentRootComponent } from './payment.root.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaymentRoutingModule,
    PaymentRootComponent,
    MatDialogModule,
  ],
})
export class PaymentModule {}
