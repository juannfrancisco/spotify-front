import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { PlaylistsNewComponent } from './pages/playlists-new/playlists-new.component';
import { PlaylistsDetailsComponent } from './pages/playlists-details/playlists-details.component';
import { PlaylistListComponent } from './pages/playlist-list/playlist-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: PlaylistListComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'crear',
    component: PlaylistsNewComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: ':id/view',
    component: PlaylistsDetailsComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule { }
