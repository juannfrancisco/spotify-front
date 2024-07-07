import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANT } from 'src/app/shared/util/constant/constant';

@Component({
  selector: 'app-home-web',
  templateUrl: './home-web.component.html',
  styleUrls: ['./home-web.component.scss']
})
export class HomeWebComponent implements OnInit {
  loginDisplay = false;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    
   if (sessionStorage.getItem(CONSTANT.TOKEN_NAME)) {
      this.router.navigate([CONSTANT.URL_MAIN]);
    }
  }

}
