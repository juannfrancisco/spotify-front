import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { CancionesNewComponent } from './pages/canciones-new/canciones-new.component';
import { CancionesListComponent } from './pages/canciones-list/canciones-list.component';
import { CancionDetailComponent } from './pages/cancion-detail/cancion-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: CancionesListComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'crear',
    component: CancionesNewComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
  {
    path: 'detail/:id',
    component: CancionDetailComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancionesRoutingModule { }
