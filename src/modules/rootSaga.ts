import { all } from 'redux-saga/effects';
import {
  fetchTodos,
  createTodo,
  toggleTodo,
  clearCompletedTodos,
} from './todos/todos.sagas';

export function* rootSaga() {
  yield all([fetchTodos(), createTodo(), toggleTodo(), clearCompletedTodos()]);
}
