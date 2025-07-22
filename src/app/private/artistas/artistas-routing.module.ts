import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { ArtistasNewComponent } from './pages/artistas-new/artistas-new.component';
import { ArtistasListComponent } from './pages/artistas-list/artistas-list.component';
import { ArtistaDetailComponent } from './pages/artista-detail/artista-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: ArtistasListComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'crear',
    component: ArtistasNewComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'detail/:id',
    component: ArtistaDetailComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistasRoutingModule { }
