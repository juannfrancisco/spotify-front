import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeMaintainerRoutingModule } from './home-maintainer-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaintainerModule } from 'src/app/shared/components/private/shared-maintainer.module';
import { HomeMaintainerComponent } from './pages/home-maintainer/home-maintainer.component';
import { HttpPrivateInterceptor } from 'src/app/core/interceptors/http-private.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [HomeMaintainerComponent],
  imports: [CommonModule, HomeMaintainerRoutingModule, SharedMaintainerModule, NgxSpinnerModule, RouterModule, FormsModule, NgbModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpPrivateInterceptor,
      multi: true,
    },
  ],
})
export class HomeMaintainerModule {}
