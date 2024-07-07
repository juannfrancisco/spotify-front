import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeWebComponent } from './pages/home-web/home-web.component';
import { HomeWebRoutingModule } from './home-web-routing.module';
import { HttpPublicInterceptor } from 'src/app/core/interceptors/http-public.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeWebComponent
  ],
  imports: [
    CommonModule,
    HomeWebRoutingModule,
    NgxSpinnerModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    
    
  ],  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpPublicInterceptor,
      multi: true
    },
  ],
})
export class HomeWebModule { }
