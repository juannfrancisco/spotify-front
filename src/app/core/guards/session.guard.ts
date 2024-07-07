import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { CONSTANT } from 'src/app/shared/util/constant/constant';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkSession(route);
  }

  public checkSession(route: ActivatedRouteSnapshot): boolean {
    //VALIDA SI EXISTE ROLES
    if (!sessionStorage.getItem(CONSTANT.TOKEN_NAME)) {
      this.router.navigate(['']);
    } else {
      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url.toString() == '') {
            this.router.navigate([CONSTANT.URL_MAIN]);
          }
        }
      });
    }
    //VALIDA ROLES
    let token = sessionStorage.getItem(CONSTANT.TOKEN_NAME) || '';
    let listPermis = jwt_decode(token);

    let initHome = true;
    if (route.data['role'] != null) {
      for (let infoData of route.data['role']) {
        let info = listPermis['permisses'].filter((n) => n == infoData);
        if (info[0] == null) {
          if (infoData == 0) {
            initHome = true;
            break;
          }
          initHome = false;
        }
        if (info[0] != null) {
          initHome = true;
          break;
        }
      }
    }
    if (!initHome) {
      this.router.navigate(['']);
    }
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.toString().includes('')) {
          if (listPermis['permisses'][0] == null) {
            this.router.navigate([CONSTANT.URL_MAIN]);
          }
        }
      }
    });
    return true;
  }
}
