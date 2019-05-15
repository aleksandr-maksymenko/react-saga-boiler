import { Todo } from './todos.models';

export function getTodos() {
  return Promise.resolve<Todo[]>([
    { id: '1', value: 'Hello', checked: false },
    { id: '2', value: 'World', checked: true },
  ]).catch(() => new Error('Server error'));
}

export function createTodo(value: string) {
  return Promise.resolve<Todo>({
    id: '1',
    value,
    checked: false,
  }).catch(() => new Error('Server error'));
}

export function checkTodo(id: string, checked: boolean) {
  return Promise.resolve<Todo>({ id, value: 'test', checked }).catch(
    () => new Error('Server error'),
  );
}

export function clearChecked() {
  return Promise.resolve<{}>({});
}
