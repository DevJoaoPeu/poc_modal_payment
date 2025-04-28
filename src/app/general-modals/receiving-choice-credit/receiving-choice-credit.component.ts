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
import { TypeComponentOrigin } from '../../shared/enums/type.component.origin.enum';
import { PaymentStrategyFactory } from './factories/payment.strategy.factory';
import { PaymentStrategy } from './model/payment-strategy.interface';
import { CheckinPaymentStrategy } from './strategies/checkin.payment.strategy';
import { ProposedPaymentStrategy } from './strategies/proposed.payment.strategy';
import { PaymentAccountsReceivableStrategy } from './strategies/payment.accounts.receivable.strategy';

@Component({
  selector: 'app-receiving-choice-credit',
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
  templateUrl: './receiving-choice-credit.component.html',
  styleUrls: ['./receiving-choice-credit.component.scss'],
  providers: [
    provideNgxMask(),
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    PaymentStrategyFactory,
    CheckinPaymentStrategy,
    ProposedPaymentStrategy,
    PaymentAccountsReceivableStrategy,
  ],
})
export class ReceivingChoiceCreditComponent implements OnInit {
  private paymentStrategy!: PaymentStrategy;
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
  accountsNotTef: Account[] = [
    { value: 1, label: 'Conta NÃO TEF 1' },
    { value: 2, label: 'Conta NÃO TEF 2' },
  ];

  accounts$!: Observable<Account[]>;
  isTef$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private dialogRef: MatDialogRef<ReceivingChoiceCreditComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dataComponentChooseModal: IDataComponentChooseModal,
    private fb: FormBuilder,
    private readonly strategyFactory: PaymentStrategyFactory
  ) {}

  ngOnInit(): void {
    this.startForm();
    this.defineCurrentAccounts();
    this.setTefMessageOrNotTef();
    this.strategyToSetFlow();
  }

  strategyToSetFlow(): void {
    this.paymentStrategy = this.strategyFactory.getStrategy(
      this.dataComponentChooseModal.componentOrigin
    );

    console.log('strategy', this.paymentStrategy);
  }

  setTefMessageOrNotTef(): void {
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

  defineCurrentAccounts(): void {
    this.accounts$ = this.formPaymentCreditCard.get('isTef')!.valueChanges.pipe(
      startWith(this.formPaymentCreditCard.get('isTef')!.value),
      map((isTef: boolean) => (isTef ? this.accountsTef : this.accountsNotTef))
    );
  }

  startForm(): void {
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
