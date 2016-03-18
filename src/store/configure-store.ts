///<reference path="./dev-types.d.ts"/>

import ReduxThunk from 'redux-thunk';
const ngRedux = require('ng-redux');
import logger from './configure-logger';
const thunk = require('redux-thunk').default;
import promiseMiddleware from '../middleware/promise-middleware';
import reducer from '../reducers';

angular.module('counter.store', [ 'ngRedux' ])
  .config(
    [ '$ngReduxProvider',
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
    middleware = [ ...middleware, logger ];
  }

  return middleware;
}

function _getEnhancers() {
  let enhancers = [];

  if (__DEV__ && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension() ];
  }

  return enhancers;
}
