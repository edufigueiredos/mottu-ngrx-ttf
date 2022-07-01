import {
  nameReducer,
  nameStateKey,
} from './../../shared/+ state/name/name.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNameComponent } from './input-name.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [InputNameComponent],
  imports: [CommonModule, StoreModule.forFeature(nameStateKey, nameReducer)],
  exports: [InputNameComponent],
})
export class InputNameModule {}
