///<reference path="./dev-types.d.ts"/>

import {fromJS} from 'immutable';
const ReduxThunk = require('redux-thunk').default;
const ngRedux = require('ng-redux');
const persistState = require('redux-localstorage');

import logger from './configure-logger';
import promiseMiddleware from '../middleware/promise-middleware';
import reducer from '../reducers';

angular.module('counter.store', ['ngRedux'])
  .config(
  ['$ngReduxProvider',
    $ngReduxProvider => {
      $ngReduxProvider.createStoreWith(
        reducer,
        _getMiddleware(),
        _getEnhancers());
    }
  ]);

function _getMiddleware() {
  let middleware = [promiseMiddleware, ReduxThunk];

  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return middleware;
}

function _getEnhancers() {
  let enhancers = [
    persistState('session', _getStorageConfig())
  ];

  if (__DEV__ && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension()];
  }

  return enhancers;
}

function _getStorageConfig() {
  return {
    key: 'angular-redux-seed',
    serialize: (store) => {
      return store && store.session ?
        JSON.stringify(store.session.toJS()) : store;
    },
    deserialize: (state) => ({
      session: state ? fromJS(JSON.parse(state)) : fromJS({}),
    }),
  };
}
