import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'entidades', loadChildren: () => import('./entidades/entidades.module').then(m => m.EntidadesModule) },
  { path: 'empleados', loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule) },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
