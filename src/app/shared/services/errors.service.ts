import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { CONSTANT } from '../util/constant/constant';

interface Permiso {
  exp: number;
  iat: number;
  id: number;
  id_user_erp: number;
  permisses: [];
  role_id: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  isSidebarPinned = false;
  isSidebarToggeled = false;
  public token = "";
  public listPermis: Permiso;
  public permisos_menu: number[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
  ) { }

  error(error){
    this.spinner.hide();
        if(error.status == 401){
         
          return Swal.fire({title:'Token inválido',text: '',icon: 'error',heightAuto: false}).then(() => {
            localStorage.removeItem(CONSTANT.TOKEN_NAME);
            window.location.reload();
          });
       
        }

        if(error.status == 500){
          
          return Swal.fire({title:"Error en el servidor",text: "intentelo más tarde",icon: 'error',heightAuto: false}).then(() => {
          });
       
        }
        
        Swal.fire({title:error.error.message,text: '',icon: 'error',heightAuto: false});
  }


}

