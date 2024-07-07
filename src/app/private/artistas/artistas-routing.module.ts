import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { ArtistasListComponent } from './pages/artistas-list/artistas-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ArtistasListComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistasRoutingModule { }