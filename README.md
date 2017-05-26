# [Web Components](https://www.webcomponents.org/) project starter using ES6 and [Webpack](https://webpack.github.io/)
[![Build Status](https://travis-ci.org/sethbergman/web-components-webpack-es6-boilerplate.svg?branch=master)](https://travis-ci.org/sethbergman/web-components-webpack-es6-boilerplate)
[![codecov](https://codecov.io/gh/sethbergman/web-components-webpack-es6-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/sethbergman/web-components-webpack-es6-boilerplate)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE.txt)

## Project setup includes:

- [x] [web-component](https://github.com/sethbergman/web-component)
- [x] Server Rendering
- [x] Webpack2
- [x] Webpack Dashboard
- [x] Dev Middleware
- [x] Web Components es5 shim
- [x] Babel 6
- [x] Boostrap
- [x] Font Awsome
- [x] Eslint
- [x] Jest

## TODO

- [ ] Uglify on production (doesn't work with es6 browsers)
- [ ] Fix jest tests - html templates, mock customElements

## Installation

```sh
$ git clone https://github.com/sethbergman/web-components-webpack-es6-boilerplate app-name
$ cd app-name
$ npm install
```

## Development

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * `$ npm run build:serve`

  The last command will boot up HTTP server on `3003` port and serve `build/client` directory in a default browser

* Hot reloading via webpack middlewares:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Testing

To execute all unit tests, use:

```sh
$ npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
$ npm run test:watch
```

## Expose App on Your Local Dev Machine

Assign yourself a unique publicly accessible url that will proxy all requests to your locally running webserver.

```sh
$ npm install -g localtunnel
$ npm start
$ npm run tunnel # run in a new tab
```

You will receive a url, for example `https://tbst.localtunnel.me`, that you can share with anyone for as long as your local instance of `lt` remains active. Any requests will be routed to your local service at the specified port.

## License

The code is available under the [MIT license](LICENSE.txt).
