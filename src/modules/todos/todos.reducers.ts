import { Reducer } from 'lib/redux-types';
import { Todo, Visibility } from './todos.models';

export const newItemValue: Reducer<string> = (state = '', action) => {
  switch (action.type) {
    case 'Todos - New item value changed':
      return action.payload.value;
    case 'Todos - New item submit succeeded':
      return '';
    default:
      return state;
  }
};

export const items: Reducer<Todo[]> = (state = [], action) => {
  switch (action.type) {
    case 'Todos - Fetch items succeeded':
      return action.payload.items;
    case 'Todos - New item submit succeeded':
      return [action.payload.item, ...state];
    case 'Todos - Item toggle succeeded':
      return state.map(item =>
        item.id === action.payload.item.id
          ? { ...item, checked: action.payload.item.checked }
          : item,
      );
    case 'Todos - Clear completed succeeded':
      return state.filter(item => item.checked === false);
    default:
      return state;
  }
};

export const visibility: Reducer<Visibility> = (state = 'all', action) => {
  switch (action.type) {
    case 'Todos - Visibility changed':
      return action.payload.visibility;
    default:
      return state;
  }
};
