import {
  nameReducer,
  nameStateKey,
} from './../../shared/+ state/name/name.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNameComponent } from './list-name.component';
import { ListNameRoutingModule } from './list-name-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ListNameComponent],
  imports: [
    CommonModule,
    ListNameRoutingModule,
    StoreModule.forFeature(nameStateKey, nameReducer),
  ],
})
export class ListNameModule {}
