import { createReducer, on } from '@ngrx/store';
import { NameState } from './name-state.model';
import { addName, deleteName } from './name.actions';

export const initialState: NameState = {
  names: [],
};
export const nameStateKey = 'nameState';
export const nameReducer = createReducer(
  initialState,
  on(addName, (state, { name }) => {
    return (state = { ...state, names: [...state.names, name] });
  }),
  on(deleteName, (state, { name }) => {
    return (state = {
      ...state,
      names: state.names.filter(nameToDelete => nameToDelete !== name),
    });
  })
);
