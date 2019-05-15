import { createSelector } from 'reselect';
import { RootState } from 'modules/rootReducer';

const getState = (state: RootState) => state.todos;

export const getNewItemValue = createSelector(
  getState,
  state => state.newItemValue,
);

export const getItems = createSelector(
  getState,
  state => state.items,
);

export const getActiveTab = createSelector(
  getState,
  state => state.visibility,
);

export const getItemsForTab = createSelector(
  getItems,
  getActiveTab,
  (items, activeTab) => {
    switch (activeTab) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => item.checked === false);
      case 'completed':
        return items.filter(item => item.checked === true);
      default:
        return items;
    }
  },
);
