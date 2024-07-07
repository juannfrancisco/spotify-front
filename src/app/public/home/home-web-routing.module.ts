import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/pages/not-found/not-found.component';
import { LoginSignInComponent } from '../auth/pages/login-sign-in/login-sign-in.component';

const routes: Routes = [
  {
    path: '', //TODO (Public) Login, Register, Forgot...
    component: LoginSignInComponent,
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  
  { component: NotFoundComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeWebRoutingModule { }
