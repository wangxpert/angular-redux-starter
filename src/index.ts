import * as angular from 'angular';
import rootReducer from './reducers';
import { CounterComponent } from './components';

const ngRedux = require('ng-redux');
const thunk = require('redux-thunk');

angular.module('counter', [ngRedux])
  .config([
    '$ngReduxProvider',
    ($ngReduxProvider) => 
      $ngReduxProvider.createStoreWith(rootReducer, [thunk])])
  .directive('ngrCounter', CounterComponent);

angular.element(document).ready(
  () => angular.bootstrap(document, ['counter']));
