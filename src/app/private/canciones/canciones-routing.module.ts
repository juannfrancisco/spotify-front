import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { CancionesListComponent } from './pages/canciones-list/canciones-list.component';

const routes: Routes = [
  {
    path: 'canciones',
    component: CancionesListComponent,canActivate: [SessionGuard], data: {role: ['0']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancionesRoutingModule { }
