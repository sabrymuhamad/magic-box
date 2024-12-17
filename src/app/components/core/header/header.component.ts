import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, AsyncPipe]
})
export class HeaderComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  pageName$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd),
    map((() => {
      const currentRoute = this.route.root;
      let title = currentRoute.snapshot.data['title'] || '';
      if (currentRoute.firstChild) {
        title = this.getPageTitle(currentRoute.firstChild) || title;
      }
      return title;
    })))


  private getPageTitle(route: ActivatedRoute): string {
    let title = route.snapshot.data['title'] || '';
    if (route.firstChild) {
      title = this.getPageTitle(route.firstChild) || title;
    }
    return title;
  }

}
