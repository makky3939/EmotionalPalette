var React = require('react')
var ReactDOM = require('react-dom')
var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var Redirect = reactRouter.Redirect
var history = require('history')
var createHistory = history.createHistory
var useBasename = history.useBasename
var Promise = require('es6-promise').Promise

// Page components
var Layout = require('./components/page/Layout.js')

// Project components
var Generate = require('./components/project/Generate.js')
var Palette = require('./components/project/Palette.js')
var Browse = require('./components/project/Browse.js')

function onUpdateHandler() {
  window.scrollTo(0, 0)
}

onUpdateHandler()

ReactDOM.render((
  <Router>
    <Route path="" component={Layout}>
      <Route path="/generate" component={Generate} />
      <Route path="/palette/:paletteId" component={Palette} />
      <Route path="/browse" component={Browse} />
    </Route>
    <Redirect from="/" to="/generate" />
  </Router>
), document.getElementById('react-root'))
