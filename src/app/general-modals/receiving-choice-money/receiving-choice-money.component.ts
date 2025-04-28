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
import { IDataComponentChooseModal } from '../../shared/interfaces/data.component.choose.modal.interface';
import { APP_DATE_FORMATS } from '../../shared/formats/date.materia.format';

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
    @Inject(MAT_DIALOG_DATA) public data: IDataComponentChooseModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.startForm();
  }

  startForm(): void {
    this.formPaymentMoney = this.fb.group({
      paymentDate: [{ value: new Date(), disabled: true }, Validators.required],
      value: [0, [Validators.required, this.validatesIfTheValueIsZero]],
      paymentAmount: [{ value: 0, disabled: true }, [Validators.required]],
      valueExchange: [{ value: 0, disabled: true }, [Validators.required]],
      residualBalance: [{ value: 0, disabled: true }, [Validators.required]],
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
