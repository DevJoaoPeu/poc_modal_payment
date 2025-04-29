import { Component, Inject } from '@angular/core';
import { ReceivingChoiceCreditComponent } from '../general-modals/receiving-choice-credit/receiving-choice-credit.component';
import { ReceivingChoiceDebitComponent } from '../general-modals/receiving-choice-debit/receiving-choice-debit.component';
import { ReceivingChoiceMoneyComponent } from '../general-modals/receiving-choice-money/receiving-choice-money.component';
import { ReceivingChoicePixComponent } from '../general-modals/receiving-choice-pix/receiving-choice-pix.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IDataComponentChooseModal } from '../shared/interfaces/data.component.choose.modal.interface';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-choose-modal-payment-method',
  imports: [RouterOutlet],
  templateUrl: './choose-modal-payment-method.component.html',
  styleUrl: './choose-modal-payment-method.component.scss',
})
export class ChooseModalPaymentMethodComponent {}
