import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  standalone: true,
  imports:[IonicModule, RouterLink]
})
export class HeroImageComponent {


}
