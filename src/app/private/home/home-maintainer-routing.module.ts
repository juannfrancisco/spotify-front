import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/pages/dashboard/dashboard.component';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { NotFoundComponent } from '../not-found/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [SessionGuard],
    data: { role: ['0'] },
  },

  {
    path: 'artistas',
    loadChildren: () => import('../artistas/artistas.module').then(m => m.ArtistasModule)
    ,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'canciones',
    loadChildren: () => import('../canciones/canciones.module').then(m => m.CancionesModule)
    ,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'playlists',
    loadChildren: () => import('../playlists/playlists.module').then(m => m.PlaylistsModule)
    ,canActivate: [SessionGuard], data: {role: ['0']}
  },
  { component: NotFoundComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMaintainerRoutingModule {}
