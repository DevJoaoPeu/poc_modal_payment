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
import { CheckinPaymentService } from './services/checkin-payment.service';
import { PaymentAccountsReceivableService } from './services/payment-accounts-receivable.service';
import { ProposedPaymentService } from './services/proposed-payment.service';

@Component({
  selector: 'app-receiving-choice-pix',
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
  providers: [
    provideNgxMask(),
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    CheckinPaymentService,
    PaymentAccountsReceivableService,
    ProposedPaymentService,
  ],
  templateUrl: './receiving-choice-pix.component.html',
  styleUrl: './receiving-choice-pix.component.scss',
})
export class ReceivingChoicePixComponent {
  formPaymentDebitCard!: FormGroup;
  titleComponet: string = 'Receber por PIX';

  installments: number[] = [1, 2, 3, 4, 5, 6, 12];

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
    private dialogRef: MatDialogRef<ReceivingChoicePixComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dataComponentChooseModal: IDataComponentChooseModal,
    private readonly checkinPaymentService: CheckinPaymentService,
    private readonly paymentAccountsReceivableService: PaymentAccountsReceivableService,
    private readonly proposedPaymentService: ProposedPaymentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.startForm();
    this.defineCurrentAccounts();
    this.setTefMessageOrNotTef();
  }

  setTefMessageOrNotTef(): void {
    const defineMessage$ = this.formPaymentDebitCard
      .get('isTef')!
      .valueChanges.pipe(
        startWith(this.formPaymentDebitCard.get('isTef')!.value),
        map((isTef: boolean) => (isTef ? true : false))
      );

    defineMessage$.subscribe((isTef) => {
      this.isTef$.next(isTef);
    });
  }

  defineCurrentAccounts(): void {
    this.accounts$ = this.formPaymentDebitCard.get('isTef')!.valueChanges.pipe(
      startWith(this.formPaymentDebitCard.get('isTef')!.value),
      map((isTef: boolean) => (isTef ? this.accountsTef : this.accountsNotTef))
    );
  }

  startForm(): void {
    this.formPaymentDebitCard = this.fb.group({
      isTef: [true, Validators.required],
      paymentDate: [{ value: new Date(), disabled: true }, Validators.required],
      currentAccount: [null, Validators.required],
      amount: [0, [Validators.required, this.validatesIfTheValueIsZero]],
      paymentAmount: [{ value: 0, disabled: true }, [Validators.required]],
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
    if (this.formPaymentDebitCard.valid) {
      this.dialogRef.close({
        action: 'pay',
        data: this.formPaymentDebitCard.value,
      });
    }
  }
}
