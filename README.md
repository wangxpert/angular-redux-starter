# Angular/TypeScript/Webpack Starter

This is the initial version of our starter project using Angular 1.x, TypeScript and Webpack to tie it all together.

## Commands


* `npm install`: install npm dependencies specified in package.json as well as typings specified in tsd.json (typings will be put into *app/__typings* folder which is also git ignored).
* `postinstall`: runs automatically after `npm install` and triggers a `npm run build` to provide a build directory to `npm start` by default

* `npm run dev`: will start webpack's development server (with live reloading) on [http://localhost:8080](http://localhost:8080). Note that in this case the bundle will be generated in memory and your bundle in *app/__build* might get out of sync.
* `npm start`: starts a production server serving the *app/__build* directory on [http://localhost:3000](http://localhost:3000)

* `npm run build`: bundle all of the application including js/css/html files, with index.html generated according to a template specified in *app/index.html* (Everything will be put into *app/__build* folder).
* `npm test`: will run the unit tests for the project as specified in *karma.conf.js* (everything ending in .test.ts will ge picked up, refer to *app/src/tests.entry.ts* if other extensions should be used).
* `npm run e2e`: will run the e2e suite for this project located in *app/e2e* (refer to *wdio.conf.js* and *gulpfile.js* for more info, this is the only `gulp` dependency).
* `npm run typings`: removes existing typings located in *app/__typings* directory, reinstalls them based on *tsd.json*, and linkes whatever is available in *node_modules* (using `tsd link`).

## Improvements

This is an initial version of this setup and will be expanded in the future. Refer to the [issues section](https://github.com/rangle/ng-typescript-webpack-starter/issues) to see what needs to be done, or create a [new one](https://github.com/rangle/ng-typescript-webpack-starter/issues/new).

## If something doesn't work

Refer to the [issues section](https://github.com/rangle/ng-typescript-webpack-starter/issues) to see if this has already been logged. Otherwise create a [new issue](https://github.com/rangle/ng-typescript-webpack-starter/issues/new).

## Example Application

At the moment, a modified fork of ngcourse-next application is in the repository. The purpose of it is to set some code structure conventions, as well as to provide a test best for css bundling, unit test setup, e2e tests setup etc. etc.
