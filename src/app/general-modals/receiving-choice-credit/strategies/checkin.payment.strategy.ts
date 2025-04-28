import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CheckinPaymentStrategy {
  constructor() {
    this.execute();
  }

  execute(): void {
    console.log('CheckinPaymentStrategy');
  }
}
