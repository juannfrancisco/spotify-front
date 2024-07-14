import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ArtistasListComponent } from './pages/artistas-list/artistas-list.component';
import { ArtistasNewComponent } from './pages/artistas-new/artistas-new.component';
import { ArtistasService } from './services/artistas.service';
@NgModule({
  declarations: [
    ArtistasListComponent,
    ArtistasNewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ArtistasRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class ArtistasModule { }
