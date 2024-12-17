import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribePageRoutingModule } from './subscribe-routing.module';

import { SubscribePage } from './subscribe.page';
import { FooterComponent } from 'src/app/components/core/footer/footer.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribePageRoutingModule,
    FooterComponent,
    SubscribeFormComponent,
    PaymentSummaryComponent
  ],
  declarations: [SubscribePage]
})
export class SubscribePageModule {}
