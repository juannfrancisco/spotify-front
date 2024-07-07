import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CONSTANT } from 'src/app/shared/util/constant/constant';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.scss']
})
export class LoginSignInComponent implements OnInit {

  Singform: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });
  
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router,
    private ngZone: NgZone){
    if (sessionStorage.getItem(CONSTANT.TOKEN_NAME) ) {
      this.router.navigate([CONSTANT.URL_MAIN]);
    }
  }

  ngOnInit(): void {

  }

  formSubmit(){
    
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
    }else{
      this.spinner.show();
      if(this.Singform.value.email == 'admin@admin.cl' && this.Singform.value.password == 'admin'){

        sessionStorage.setItem(CONSTANT.TOKEN_NAME, "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlplbnRhIEFkbWluaXN0cmFkb3IiLCJwZXJtaXNzZXMiOlsiMSIsIjMiLCI1Il19.Gh_bRyFbV4B7VfvB9wLrdURakm-1bA-28r2Wuvow0rQ");
        sessionStorage.setItem("type_session","signIn");
        this.spinner.hide();
        this.ngZone.run(() => {
          this.router.navigate([CONSTANT.URL_MAIN]);
        });
      }else if(this.Singform.value.email == 'user@user.cl' && this.Singform.value.password == 'user'){
       
        sessionStorage.setItem(CONSTANT.TOKEN_NAME, "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlplbnRhIEFkbWluaXN0cmFkb3IiLCJwZXJtaXNzZXMiOlsiMSJdfQ.M1K1RdmxBkzP4mMvqLzlFTNjF5tV58iWIoN8y1CQdlI");
        sessionStorage.setItem("type_session","signIn");
        this.spinner.hide();
        this.ngZone.run(() => {
          this.router.navigate([CONSTANT.URL_MAIN]);
        });
      }else{
        this.spinner.hide();
        //Swal.fire({title:Error, text: 'usuario o contraseña incorrecto',icon: 'error',heightAuto: false});
      }     
    }
  }
}
