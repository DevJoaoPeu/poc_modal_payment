import { Component, Inject } from '@angular/core';
import { ReceivingChoiceCreditComponent } from '../general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from '../general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoiceMoneyComponent } from '../general-modals/receiving-choice-money/receiving-choice-money.component';
import { ReceivingChoicePixComponent } from '../general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IDataComponentChooseModal } from '../shared/interfaces/data.component.choose.modal.interface';

@Component({
  selector: 'app-choose-modal-payment-method',
  imports: [],
  templateUrl: './choose-modal-payment-method.component.html',
  styleUrl: './choose-modal-payment-method.component.scss',
})
export class ChooseModalPaymentMethodComponent {
  constructor(
    private readonly dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    private readonly dataComponentChooseModal: IDataComponentChooseModal
  ) {}

  openModalPaymentCredit() {
    const dialogRef = this.dialog.open<
      ReceivingChoiceCreditComponent,
      IDataComponentChooseModal
    >(ReceivingChoiceCreditComponent, {
      data: {
        componentOrigin: this.dataComponentChooseModal.componentOrigin,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  openModalPaymentDebit() {
    const dialogRef = this.dialog.open<
      ReceivingChoiceDebitComponent,
      IDataComponentChooseModal
    >(ReceivingChoiceDebitComponent, {
      data: {
        componentOrigin: this.dataComponentChooseModal.componentOrigin,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  openModalPaymentMoney() {
    const dialogRef = this.dialog.open<
      ReceivingChoiceMoneyComponent,
      IDataComponentChooseModal
    >(ReceivingChoiceMoneyComponent, {
      data: {
        componentOrigin: this.dataComponentChooseModal.componentOrigin,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  openModalPaymentPix() {
    const dialogRef = this.dialog.open<
      ReceivingChoicePixComponent,
      IDataComponentChooseModal
    >(ReceivingChoicePixComponent, {
      data: {
        componentOrigin: this.dataComponentChooseModal.componentOrigin,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
