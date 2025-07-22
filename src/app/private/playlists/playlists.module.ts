import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaylistListComponent } from './pages/playlist-list/playlist-list.component';
import { PlaylistNewComponent } from './pages/playlist-new/playlist-new.component';
import { PlaylistDetailComponent } from './pages/playlist-detail/playlist-detail.component';

@NgModule({
  declarations: [
    PlaylistListComponent,
    PlaylistNewComponent,
    PlaylistDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PlaylistsRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class PlaylistsModule { }
