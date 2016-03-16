import * as angular from 'angular';
import 'angular-ui-router';
import './store/configure-store';

// Global styles
import './styles/index.css';

import {
  RioCounter,
  RioButton,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
} from './components';

import { RioAboutPage } from './containers/about-page';
import { RioCounterPage } from './containers/counter-page';
import { RioApp } from './containers/app';

import { RouterConfig } from './services';

angular.module('rio.router', ['ui.router'])
  .config(RouterConfig);

angular.module('rio.components', ['counter.store'])
  .component(RioCounterPage.selector, RioCounterPage.options)
  .component(RioAboutPage.selector, RioAboutPage.options)
  .component(RioCounter.selector, RioCounter.options)
  .component(RioButton.selector, RioButton.options)
  .component(RioNavigator.selector, RioNavigator.options)
  .component(RioNavigatorItem.selector, RioNavigatorItem.options)
  .component(RioLogo.selector, RioLogo.options);

angular.module('app', [
  'rio.router',
  'rio.components'])
  .component(
    RioApp.selector,
    RioApp.options
  );

angular.element(document).ready(
  () => angular.bootstrap(document, [ 'app' ]));
