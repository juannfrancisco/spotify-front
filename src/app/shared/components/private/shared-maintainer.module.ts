import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterMaintainerComponent } from './footer-maintainer/footer-maintainer.component';
import { SidebarMaintainerComponent } from './sidebar-maintainer/sidebar-maintainer.component';
import { NavbarMaintainerComponent } from './navbar-maintainer/navbar-maintainer.component';

@NgModule({
  declarations: [
    FooterMaintainerComponent,
    SidebarMaintainerComponent,
    NavbarMaintainerComponent
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

