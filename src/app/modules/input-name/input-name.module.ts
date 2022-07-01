import {
  nameReducer,
  nameStateKey,
} from './../../shared/+ state/name/name.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNameComponent } from './input-name.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [InputNameComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, StoreModule.forFeature(nameStateKey, nameReducer)],
  exports: [InputNameComponent],
})
export class InputNameModule {}
