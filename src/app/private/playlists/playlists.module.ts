import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PlaylistListComponent } from './pages/playlist-list/playlist-list.component';
import { PlaylistsNewComponent } from './pages/playlists-new/playlists-new.component';
import { PlaylistsDetailsComponent } from './pages/playlists-details/playlists-details.component';
import { CancionesModule } from '../canciones/canciones.module';
@NgModule({
  declarations: [
    PlaylistListComponent,
    PlaylistsNewComponent,
    PlaylistsDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PlaylistsRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    CancionesModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class PlaylistsModule { }
