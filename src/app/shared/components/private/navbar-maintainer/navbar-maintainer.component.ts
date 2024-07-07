import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AppService } from 'src/app/shared/services/app.service';
import { CONSTANT } from 'src/app/shared/util/constant/constant';


@Component({
  selector: 'app-navbar-maintainer',
  templateUrl: './navbar-maintainer.component.html',
  styleUrls: ['./navbar-maintainer.component.scss']
})
export class NavbarMaintainerComponent  implements OnInit {

  isCollapsed = true;
  
  constructor(private appService: AppService,
    private router: Router, ) { }

  ngOnInit(): void {
    
  }

  toggleSidebarPin() {
    this.isCollapsed = !this.isCollapsed;
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  signOff(){
    Swal.fire({
      title: 'Alerta',
      text: "¿Quieres cerrar sesion?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        
        sessionStorage.removeItem("type_session");
        sessionStorage.removeItem(CONSTANT.TOKEN_NAME);
        window.location.reload();
      }
    });
  }

}

