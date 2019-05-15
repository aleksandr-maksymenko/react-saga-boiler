import { Action } from 'lib/redux-types';
import { Todo, Visibility } from './todos.models';

export type TodosAction =
  // User actions
  | Action<'Todos - New item value changed', { value: string }>
  | Action<'Todos - Create new item requested'>
  | Action<'Todos - Visibility changed', { visibility: Visibility }>
  | Action<'Todos - Item toggle requested', { id: string; checked: boolean }>
  | Action<'Todos - Clear completed requested'>
  // System actions
  | Action<'Todos - Fetch items succeeded', { items: Todo[] }>
  | Action<'Todos - New item submit succeeded', { item: Todo }>
  | Action<'Todos - Item toggle succeeded', { item: Todo }>
  | Action<'Todos - Clear completed succeeded'>;
