import { Component } from '@angular/core';
import { ReceivingChoiceCreditComponent } from '../general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from '../general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoiceMoneyComponent } from '../general-modals/receiving-choice-money/receiving-choice-money.component';
import { ReceivingChoicePixComponent } from '../general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-choose-modal-payment-method',
  imports: [],
  templateUrl: './choose-modal-payment-method.component.html',
  styleUrl: './choose-modal-payment-method.component.scss',
})
export class ChooseModalPaymentMethodComponent {
  constructor(public dialog: MatDialog) {}

  openModalPaymentCredit() {
    const dialogRef = this.dialog.open(ReceivingChoiceCreditComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado', result);
    });
  }
  openModalPaymentDebit() {
    const dialogRef = this.dialog.open(ReceivingChoiceDebitComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado', result);
    });
  }
  openModalPaymentMoney() {
    const dialogRef = this.dialog.open(ReceivingChoiceMoneyComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado', result);
    });
  }
  openModalPaymentPix() {
    const dialogRef = this.dialog.open(ReceivingChoicePixComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado', result);
    });
  }
}
