import * as angular from 'angular';
import { CounterComponent } from './components';
import './store/configure-store';

// Global styles
import './styles/index.css';

angular.module('counter', [ 'counter.store' ])
  .directive('ngrCounter', CounterComponent);

angular.element(document).ready(
  () => angular.bootstrap(document, [ 'counter' ]));
