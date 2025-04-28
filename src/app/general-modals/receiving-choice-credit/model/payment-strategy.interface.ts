import { FormGroup } from '@angular/forms';

export interface PaymentStrategy {
  execute(form: FormGroup): void;
}
