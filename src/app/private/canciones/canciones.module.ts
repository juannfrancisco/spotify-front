import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CancionesRoutingModule } from './canciones-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CancionesListComponent } from './pages/canciones-list/canciones-list.component';
import { CancionesNewComponent } from './pages/canciones-new/canciones-new.component';
import { ArtistasService } from '../artistas/services/artistas.service';
import { CancionesTableComponent } from './components/canciones-table/canciones-table.component';
@NgModule({
  declarations: [
    CancionesListComponent,
    CancionesNewComponent,
    CancionesTableComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CancionesRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports: [
    CancionesTableComponent
  ]
})
export class CancionesModule { }
