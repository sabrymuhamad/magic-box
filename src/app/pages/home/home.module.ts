import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HowWorksComponent } from './how-works/how-works.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeroImageComponent,
    HowWorksComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
