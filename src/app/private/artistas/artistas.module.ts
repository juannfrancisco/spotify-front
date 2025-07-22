import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ArtistasListComponent } from './pages/artistas-list/artistas-list.component';
import { ArtistasNewComponent } from './pages/artistas-new/artistas-new.component';
import { ArtistaDetailComponent } from './pages/artista-detail/artista-detail.component';
import { ArtistasService } from './services/artistas.service';
import { SharedMaintainerModule } from 'src/app/shared/components/private/shared-maintainer.module';
@NgModule({
  declarations: [
    ArtistasListComponent,
    ArtistasNewComponent,
    ArtistaDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ArtistasRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedMaintainerModule,
  ]
})
export class ArtistasModule { }
