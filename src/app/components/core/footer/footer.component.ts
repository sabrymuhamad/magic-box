import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone:true,
  imports:[IonicModule]
})
export class FooterComponent{

  year = new Date().getFullYear();

}
