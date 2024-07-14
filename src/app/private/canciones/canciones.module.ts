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
@NgModule({
  declarations: [
    CancionesListComponent,
    CancionesNewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CancionesRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class CancionesModule { }
