import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterMaintainerComponent } from './footer-maintainer/footer-maintainer.component';
import { SidebarMaintainerComponent } from './sidebar-maintainer/sidebar-maintainer.component';
import { NavbarMaintainerComponent } from './navbar-maintainer/navbar-maintainer.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    FooterMaintainerComponent,
    SidebarMaintainerComponent,
    NavbarMaintainerComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule, NgbModule, RouterModule
  ],
  exports: [
    FooterMaintainerComponent,
    SidebarMaintainerComponent,
    NavbarMaintainerComponent
  ]
})
export class SharedMaintainerModule { }

