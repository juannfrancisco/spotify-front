import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { PlaylistListComponent } from './pages/playlist-list/playlist-list.component';
@NgModule({
  declarations: [
    PlaylistListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PlaylistsRoutingModule,
    DataTablesModule.forRoot(),
  ]
})
export class PlaylistsModule { }
