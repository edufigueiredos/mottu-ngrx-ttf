import { createAction, props } from '@ngrx/store';

export const addName = createAction(
  '[Name][Store] Adicionar nome',
  props<{ name: string }>()
);
export const deleteName = createAction(
  '[Name][Store] Apagar um nome',
  props<{ name: string }>()
);
