import { combineReducers } from 'redux';
import { StateType } from 'lib/redux-types';
import * as todos from './todos/todos.reducers';

export const rootReducer = combineReducers({
  todos: combineReducers(todos),
});

export type RootState = StateType<typeof rootReducer>;
