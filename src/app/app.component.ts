import { Component, OnInit } from '@angular/core';
import { ReceivingChoiceCreditComponent } from './general-modals/receiving-choice-credit/receiving-choice-credit.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openModalCheckin(): void {
    const dialogRef = this.dialog.open(ReceivingChoiceCreditComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
    });
  }

  openModalProposal(): void {}

  openModalAccountsReceiver(): void {}

  openModalBillsToPay(): void {}
}
