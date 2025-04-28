import { Component, OnInit } from '@angular/core';
import { ReceivingChoiceCreditComponent } from './general-modals/receiving-choice-credit/receiving-choice-credit.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ReceivingChoiceDebitComponent } from './general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoiceMoneyComponent } from './general-modals/receiving-choice-money/receiving-choice-money.component';
import { ReceivingChoicePixComponent } from './general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { ChooseModalPaymentMethodComponent } from './choose-modal-payment-method/choose-modal-payment-method.component';
import { TypeComponentOrigin } from './shared/enums/type.component.origin.enum';

@Component({
  selector: 'app-root',
  imports: [MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openModalPayment(): void {
    const dialogRef = this.dialog.open(ChooseModalPaymentMethodComponent, {
      data: {
        componentOrigin: TypeComponentOrigin.CHECKIN,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
    });
  }
}
