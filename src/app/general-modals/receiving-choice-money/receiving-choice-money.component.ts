import { Component, Inject, OnInit } from '@angular/core';
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
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, map, startWith } from 'rxjs';
import { Account } from '../../shared/interfaces/account.current.interface';
import { TypeMachine } from '../../shared/interfaces/type.machine.interface';

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMM YYYY',
  },
};
@Component({
  selector: 'app-receiving-choice-money',
  imports: [
    MatDialogModule,
    NgFor,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './receiving-choice-money.component.html',
  styleUrl: './receiving-choice-money.component.scss',
  providers: [
    provideNgxMask(),
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class ReceivingChoiceMoneyComponent {
  formPaymentMoney!: FormGroup;
  titleComponet: string = 'Receber por Dinheiro';

  accountsMoney: Account[] = [{ value: 1, label: 'Conta Dinheiro' }];

  accounts$!: Observable<Account[]>;

  constructor(
    private dialogRef: MatDialogRef<ReceivingChoiceMoneyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.startForm();
  }

  startForm() {
    this.formPaymentMoney = this.fb.group({
      paymentDate: [{ value: new Date(), disabled: true }, Validators.required],
      currentAccount: [null, Validators.required],
      paymentValue: [0, [Validators.required, this.validatesIfTheValueIsZero]],
    });
  }

  validatesIfTheValueIsZero(control: AbstractControl): ValidationErrors | null {
    const valor: number = +control.value;
    return valor === 0 ? { valorZero: true } : null;
  }

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
    if (this.formPaymentMoney.valid) {
      this.dialogRef.close({
        action: 'pay',
        data: this.formPaymentMoney.value,
      });
    }
  }
}
