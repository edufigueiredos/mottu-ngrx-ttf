import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NameState } from './name-state.model';
import { nameStateKey } from './name.reducers';

export const nameSelector = createFeatureSelector<NameState>(nameStateKey);

export const getNames = createSelector(nameSelector, (state) => state.names);
export const filterName = (name: string) =>
  createSelector(getNames, (state) => {
    return state.filter((nameToFind) =>
      nameToFind.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  });
export const getLastName = createSelector(
  getNames,
  (state) => state[state.length - 1]
);
