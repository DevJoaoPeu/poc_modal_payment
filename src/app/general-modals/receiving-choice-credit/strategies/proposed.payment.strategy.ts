import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ProposedPaymentStrategy {
  constructor() {
    this.execute();
  }

  execute(): void {
    console.log('proposto');
  }
}
