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

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

interface Account {
  value: number;
  label: string;
}

interface TypeMachine {
  value: number;
  label: string;
}

@Component({
  selector: 'app-receiving-choice-checkin',
  standalone: true,
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
  templateUrl: './receiving-choice-checkin.component.html',
  styleUrls: ['./receiving-choice-checkin.component.scss'],
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
export class ReceivingChoiceCheckinComponent implements OnInit {
  formPaymentCreditCard!: FormGroup;
  titleComponet: string = 'Receber por Cartão de Crédito';

  installments: number[] = [1, 2, 3, 4, 5, 6, 12];

  typeMachine: TypeMachine[] = [
    { value: 1, label: 'AUTO' },
    { value: 1, label: 'MANUAL' },
  ];

  accountsTef: Account[] = [
    { value: 1, label: 'Conta TEF 1' },
    { value: 2, label: 'Conta TEF 2' },
  ];
  accountsNotTef = [
    { value: 1, label: 'Conta NÃO TEF 1' },
    { value: 2, label: 'Conta NÃO TEF 2' },
  ];
  accountsMoney: Account[] = [{ value: 1, label: 'Conta Dinheiro' }];

  accounts$!: Observable<Account[]>;
  isTef$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private dialogRef: MatDialogRef<ReceivingChoiceCheckinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.startForm();
    this.defineCurrentAccounts();
    this.setTefMessageOrNotTef();
  }

  setTefMessageOrNotTef() {
    const defineMessage$ = this.formPaymentCreditCard
      .get('isTef')!
      .valueChanges.pipe(
        startWith(this.formPaymentCreditCard.get('isTef')!.value),
        map((isTef: boolean) => (isTef ? true : false))
      );

    defineMessage$.subscribe((isTef) => {
      this.isTef$.next(isTef);
    });
  }

  defineCurrentAccounts() {
    this.accounts$ = this.formPaymentCreditCard.get('isTef')!.valueChanges.pipe(
      startWith(this.formPaymentCreditCard.get('isTef')!.value),
      map((isTef: boolean) => (isTef ? this.accountsTef : this.accountsNotTef))
    );
  }

  startForm() {
    this.formPaymentCreditCard = this.fb.group({
      isTef: [true, Validators.required],
      machine: [this.typeMachine[0].value, Validators.required],
      parcel: [1, Validators.required],
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
    if (this.formPaymentCreditCard.valid) {
      this.dialogRef.close({
        action: 'pay',
        data: this.formPaymentCreditCard.value,
      });
    }
  }
}
