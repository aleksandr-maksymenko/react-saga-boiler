import { Reducer as ReduxReducer } from 'redux';
import { RootAction } from 'modules/rootAction';

export type StateType<ReducerOrMap> = ReducerOrMap extends (
  ...args: any[]
) => any
  ? ReturnType<ReducerOrMap>
  : ReducerOrMap extends object
  ? { [K in keyof ReducerOrMap]: StateType<ReducerOrMap[K]> }
  : never;

type ActionType = string;

interface ExcludedAction {
  type: '@@INIT';
}

type EmptyAction<T extends ActionType> = Exclude<{ type: T }, ExcludedAction>;

type Payload = Record<string, any>;

type PayloadAction<T extends ActionType, P extends Payload> = Exclude<
  { type: T; payload: P },
  ExcludedAction
>;

export type Action<
  T extends ActionType,
  P extends Payload | undefined = undefined
> = Readonly<P extends Payload ? PayloadAction<T, P> : EmptyAction<T>>;

export type ExtractAction<
  RootAction extends Action<ActionType, any>,
  T extends RootAction['type']
> = Extract<RootAction, { type: T }>;

export type ExtractPayload<
  RootAction extends Action<ActionType, any>,
  T extends RootAction['type']
> = ExtractAction<RootAction, T> extends PayloadAction<T, infer P>
  ? P
  : undefined;

export type EmptyActionType<
  RootAction extends Action<ActionType, any>
> = Exclude<RootAction, { payload: any }>['type'];

export type PayloadActionType<
  RootAction extends Action<ActionType, any>
> = Extract<RootAction, { payload: any }>['type'];

export type Reducer<S> = ReduxReducer<S, RootAction>;
