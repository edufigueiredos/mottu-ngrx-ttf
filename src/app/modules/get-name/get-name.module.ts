import {
  nameReducer,
  nameStateKey,
} from './../../shared/+ state/name/name.reducers';
import { StoreModule } from '@ngrx/store';
import { GetNameComponent } from './get-name.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GetNameComponent],
  imports: [CommonModule, StoreModule.forFeature(nameStateKey, nameReducer)],
  exports: [GetNameComponent],
})
export class GetNameModule {}
