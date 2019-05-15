import { applyMiddleware, compose, createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, RootState } from 'modules/rootReducer';
import { rootSaga } from 'modules/rootSaga';
import { RootAction } from 'modules/rootAction';

export function createReduxStore(
  preloadedState?: RootState,
): Store<RootState, RootAction> {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware),
      devToolsEnhancer({}),
    ),
  );

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules/rootReducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}
