import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { PlaylistListComponent } from './pages/playlist-list/playlist-list.component';
import { PlaylistNewComponent } from './pages/playlist-new/playlist-new.component';

const routes: Routes = [
  {
    path: 'list',
    component: PlaylistListComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'new',
    component: PlaylistNewComponent, canActivate: [SessionGuard], data: {role: ['0']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule { }
