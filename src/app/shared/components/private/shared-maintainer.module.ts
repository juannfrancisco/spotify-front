import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterMaintainerComponent } from './footer-maintainer/footer-maintainer.component';
import { SidebarMaintainerComponent } from './sidebar-maintainer/sidebar-maintainer.component';
import { NavbarMaintainerComponent } from './navbar-maintainer/navbar-maintainer.component';
import { ConfirmDeleteModalComponent } from '../confirm-delete-modal/confirm-delete-modal.component';

@NgModule({
  declarations: [
    FooterMaintainerComponent,
    SidebarMaintainerComponent,
    NavbarMaintainerComponent,
    ConfirmDeleteModalComponent
  ],
  imports: [
    CommonModule, NgbModule, RouterModule
  ],
  exports: [
    FooterMaintainerComponent,
    SidebarMaintainerComponent,
    NavbarMaintainerComponent,
    ConfirmDeleteModalComponent
  ]
})
export class SharedMaintainerModule { }

