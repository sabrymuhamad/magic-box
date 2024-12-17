import { Component, output } from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  standalone: true
})
export class PaymentSummaryComponent {

  submitForm = output();

}
