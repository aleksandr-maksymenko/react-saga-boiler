import { delay, select, call } from 'redux-saga/effects';
import { put, takeLeading, takeEvery } from 'lib/effects';
import { selectors } from 'modules/selectors';
import * as todosServices from './todos.services';

export function* fetchTodos() {
  yield delay(200);
  const items = yield call(todosServices.getTodos);
  yield put('Todos - Fetch items succeeded', { items });
}

export function* createTodo() {
  yield takeEvery('Todos - Create new item requested', function* handle() {
    const value = yield select(selectors.todos.getNewItemValue);
    const item = yield call(todosServices.createTodo, value);
    yield put('Todos - New item submit succeeded', { item });
  });
}

export function* toggleTodo() {
  yield takeLeading('Todos - Item toggle requested', function* handle(action) {
    const item = yield call(
      todosServices.checkTodo,
      action.payload.id,
      action.payload.checked,
    );
    yield put('Todos - Item toggle succeeded', { item });
  });
}

export function* clearCompletedTodos() {
  yield takeLeading('Todos - Clear completed requested', function* handle() {
    yield call(todosServices.clearChecked);
    yield put('Todos - Clear completed succeeded');
  });
}
