import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './core/guards/session.guard';
import { HomeMaintainerComponent } from './private/home/pages/home-maintainer/home-maintainer.component';
import { HomeWebComponent } from './public/home/pages/home-web/home-web.component';
import { CONSTANT } from './shared/util/constant/constant';

const routes: Routes = [
  {
    path: CONSTANT.URL_MAIN, //TODO (Private)
    component: HomeMaintainerComponent,
    loadChildren: () => import('./private/home/home-maintainer.module').then((m) => m.HomeMaintainerModule),
    canActivate: [SessionGuard],
  },
  {
    path: '',
    component: HomeWebComponent,
    loadChildren: () => import('./public/home/home-web.module').then((m) => m.HomeWebModule),
  },

  { path: '**', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
