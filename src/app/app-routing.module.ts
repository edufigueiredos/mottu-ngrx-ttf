import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-name', pathMatch: 'full' },
  { path: 'list-name', loadChildren: () => import('./modules/list-name/list-name.module').then(module => module.ListNameModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
