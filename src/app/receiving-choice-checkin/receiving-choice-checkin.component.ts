import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receiving-choice-checkin',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    FormsModule,
  ],
  templateUrl: './receiving-choice-checkin.component.html',
  styleUrl: './receiving-choice-checkin.component.scss',
})
export class ReceivingChoiceCheckinComponent {
  isTefActive: boolean = true;
  selectedMachine: string = 'AUTO';
  selectedInstallments: number | null = null;
  paymentDate: Date = new Date();
  selectedAccount: string | null = null;
  paymentValue: number | null = null;

  installments = [1, 2, 3, 4, 5, 6, 12];
  accounts = ['Banco do Brasil', 'Caixa Econômica', 'Nubank', 'Santander'];

  constructor(
    private dialogRef: MatDialogRef<ReceivingChoiceCheckinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onBack(): void {
    this.dialogRef.close({ action: 'back' });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }

  onPay(): void {
    const payload = {
      isTefActive: this.isTefActive,
      selectedMachine: this.selectedMachine,
      selectedInstallments: this.selectedInstallments,
      paymentDate: this.paymentDate,
      selectedAccount: this.selectedAccount,
      paymentValue: this.paymentValue,
    };

    this.dialogRef.close({ action: 'pay', data: payload });
  }
}
