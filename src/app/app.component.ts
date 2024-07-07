import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CONSTANT } from './shared/util/constant/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spotify';
  mainter = false;

  constructor(
      private _router: Router
    ) { 

      _router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          if(event.url.toString().includes(CONSTANT.URL_MAIN)){
            this.mainter = true;
          }
        }
      });

    }
}
