import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CancionesRoutingModule } from './canciones-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { CancionesListComponent } from './pages/canciones-list/canciones-list.component';
@NgModule({
  declarations: [
    CancionesListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CancionesRoutingModule,
    DataTablesModule.forRoot(),
  ]
})
export class CancionesModule { }
