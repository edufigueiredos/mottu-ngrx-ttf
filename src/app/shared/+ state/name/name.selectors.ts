import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NameState } from './name-state.model';
import { nameStateKey } from './name.reducers';

export const nameSelector = createFeatureSelector<NameState>(nameStateKey);

export const getNames = createSelector(nameSelector, (state) => state.names);
export const filterName = (name: string) =>
  createSelector(nameSelector, (state) =>
    state.names.filter((nameToFind) => nameToFind === name)
  );
