import { useCallback, useMemo } from 'react';
import {
  useMappedState,
  useDispatch as useRawDispatch,
} from 'redux-react-hook';
import { selectors as rootSelectors } from 'modules/selectors';
import { RootState } from 'modules/rootReducer';
import { RootAction } from 'modules/rootAction';
import {
  EmptyActionType,
  PayloadActionType,
  ExtractPayload,
} from './redux-types';

export function useSelectors<
  T extends { [P: string]: (state: RootState, ...args: any[]) => any }
>(
  selectorMapFactory: (selectors: typeof rootSelectors) => T,
  deps: ReadonlyArray<any> = [],
): { [P in keyof T]: ReturnType<T[P]> } {
  const mapState = useCallback(
    (state: RootState) => {
      const selectorMap = selectorMapFactory(rootSelectors);
      return Object.keys(selectorMap).reduce<any>((acc, key) => {
        const selector = selectorMap[key];
        acc[key] = selector(state);
        return acc;
      }, {});
    },
    [selectorMapFactory],
  );

  return useMappedState(mapState);
}

interface Put {
  <T extends EmptyActionType<RootAction>>(type: T): RootAction;
  <T extends PayloadActionType<RootAction>>(
    type: T,
    payload: ExtractPayload<RootAction, T>,
  ): RootAction;
}

export const put: Put = <T extends RootAction['type']>(
  type: T,
  payload?: ExtractPayload<RootAction, T>,
) => (payload == null ? { type } : { type, payload });

export function useActions<
  T extends { [P: string]: (...args: any[]) => RootAction }
>(
  actionMapFactory: (put: Put) => T,
  deps: ReadonlyArray<any> = [],
): { [P in keyof T]: (...args: Parameters<T[P]>) => void } {
  const dispatch = useRawDispatch();

  const actions = useMemo<
    { [P in keyof T]: (...args: Parameters<T[P]>) => void }
  >(() => {
    const actionMap = actionMapFactory(put);
    return Object.keys(actionMap).reduce<any>((acc, key) => {
      const actionCreator = actionMap[key];
      acc[key] = (...args: Parameters<typeof actionCreator>) => {
        const action = actionCreator(...args);
        dispatch(action);
      };
      return acc;
    }, {});
  }, [actionMapFactory, dispatch]);

  return actions;
}
