import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core-components/login/login.component';
import { PageErrorComponent } from './core-components/page-error/page-error.component';
import { MainContainerComponent } from './core-components/shared-components/main-container/main-container.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: 'main',
    component: MainContainerComponent,
    loadChildren: () => import('./main-module/main-app.module').then(m => m.MainAppModule),
    canLoad:[AuthGuard]
  },
  {
    path:"page-error",
    component:PageErrorComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:"**",
    redirectTo:"/page-error",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
