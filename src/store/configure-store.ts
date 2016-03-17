///<reference path="./dev-types.d.ts"/>

import ReduxThunk from 'redux-thunk';
const ngRedux = require('ng-redux');
const createLogger = require('redux-logger');
import rootReducer from '../reducers';

angular.module('counter.store', [ 'ngRedux' ])
  .config(
    [ '$ngReduxProvider',
    $ngReduxProvider => {
      $ngReduxProvider.createStoreWith(
        rootReducer,
        _getMiddleware(),
        _getEnhancers());
    }
  ]);

function _getMiddleware() {
  let middleware = [
    ReduxThunk
  ];

  if (__DEV__) {
    const logger = createLogger();
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
