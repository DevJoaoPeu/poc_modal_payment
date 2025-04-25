import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceivingChoiceCheckinComponent } from './receiving-choice-checkin/receiving-choice-checkin.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openModalPaymentCheckin(): void {
    const dialogRef = this.dialog.open(ReceivingChoiceCheckinComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
    });
  }

  openModalPaymentProposal(): void {}

  openModalPaymentAccountsReceiver(): void {}

  openModalBillsToPay(): void {}

  openModalCancelCheckin(): void {}

  openModalCancelProposal(): void {}

  openModalCancelAccountsReceiver(): void {}

  openModalCancelBillsToPay(): void {}
}
