import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PlaylistListComponent } from './pages/playlist-list/playlist-list.component';
import { PlaylistsNewComponent } from './pages/playlists-new/playlists-new.component';
@NgModule({
  declarations: [
    PlaylistListComponent,
    PlaylistsNewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PlaylistsRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class PlaylistsModule { }
