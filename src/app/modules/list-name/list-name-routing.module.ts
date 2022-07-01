import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNameComponent } from './list-name.component';

const routes: Routes = [{ path: '', component: ListNameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListNameRoutingModule {}
