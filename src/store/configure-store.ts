///<reference path="./dev-types.d.ts"/>

const ngRedux = require('ng-redux');
const createLogger = require('redux-logger');
const thunk = require('redux-thunk').default;
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
    thunk
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
