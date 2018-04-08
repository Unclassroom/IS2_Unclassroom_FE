import { ISession } from './session';
import { ADD_SESSION, ADD_REGISTER, REMOVE_SESSION, REMOVE_REGISTER } from './actions';

export interface AppState {
    session: ISession;
    isLogged: boolean;
    tempID: number;
}

export const INITIAL_STATE: AppState = {
  session: {
    token: undefined,
    name: undefined,
    role: undefined
  },
  isLogged: false,
  tempID: undefined
}

export function rootReducer(state, action) {
  switch (action.type) {
    case ADD_SESSION:
      return Object.assign({}, state, { session: action.session, isLogged: true });
    case REMOVE_SESSION:
      return Object.assign({}, state, INITIAL_STATE);
    case ADD_REGISTER:
      return Object.assign({}, state, { session: action.session });
    case REMOVE_REGISTER:
      return Object.assign({}, state, INITIAL_STATE);
  }
  return state;
}
