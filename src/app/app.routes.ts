import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pagamentos',
    loadChildren: () => import('./payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'payments/:id',
    outlet: 'popup',
    loadComponent: () =>
      import(
        './general-modals/receiving-choice-credit/receiving-choice-credit.component'
      ).then((cmp) => cmp.ReceivingChoiceCreditComponent),
  },
  {
    path: '',
    outlet: 'popup',
    loadComponent: () =>
      import('./app.component').then((cmp) => cmp.AppComponent),
  },
];
