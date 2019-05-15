import {
  put as defaultPut,
  PutEffect,
  takeEvery as defaultTakeEvery,
  takeLatest as defaultTakeLatest,
  takeLeading as defaultTakeLeading,
  ForkEffect,
} from 'redux-saga/effects';
import { RootAction } from 'modules/rootAction';
import {
  EmptyActionType,
  PayloadActionType,
  ExtractPayload,
  ExtractAction,
} from './redux-types';

export interface Put {
  <T extends EmptyActionType<RootAction>>(type: T): PutEffect<RootAction>;
  <T extends PayloadActionType<RootAction>>(
    type: T,
    payload: ExtractPayload<RootAction, T>,
  ): PutEffect<RootAction>;
}

export const put: Put = <T extends RootAction['type']>(
  type: T,
  payload?: ExtractPayload<RootAction, T>,
) => (payload == null ? defaultPut({ type }) : defaultPut({ type, payload }));

export interface Watcher {
  <T extends RootAction['type']>(
    type: T | T[],
    worker: (action: ExtractAction<RootAction, T>) => any,
  ): ForkEffect;
}

export const takeEvery: Watcher = <T extends RootAction['type']>(
  type: T | T[],
  worker: (action: ExtractAction<RootAction, T>) => any,
) => defaultTakeEvery(type, worker);

export const takeLatest: Watcher = <T extends RootAction['type']>(
  type: T | T[],
  worker: (action: ExtractAction<RootAction, T>) => any,
) => defaultTakeLatest(type, worker);

export const takeLeading: Watcher = <T extends RootAction['type']>(
  type: T | T[],
  worker: (action: ExtractAction<RootAction, T>) => any,
) => defaultTakeLeading(type, worker);
