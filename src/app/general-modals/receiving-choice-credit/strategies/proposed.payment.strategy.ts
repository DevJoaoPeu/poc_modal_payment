import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ProposedPaymentStrategy {
  constructor() {}

  execute(form: FormGroup): void {}
}
