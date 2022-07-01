import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNameComponent } from './list-name.component';
import { ListNameRoutingModule } from './list-name-routing.module';

@NgModule({
  declarations: [ListNameComponent],
  imports: [CommonModule, ListNameRoutingModule],
})
export class ListNameModule {}
