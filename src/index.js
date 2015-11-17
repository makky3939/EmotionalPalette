var React = require('react')
var ReactDOM = require('react-dom')
var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var Redirect = reactRouter.Redirect
var history = require('history')
var createHistory = history.createHistory
var useBasename = history.useBasename

// Page components
var Layout = require('./components/page/Layout.js')

// Project components
var Home = require('./components/project/Home.js')

function onUpdateHandler() {
  window.scrollTo(0, 0)
}

onUpdateHandler()

ReactDOM.render((
  <Router>
    <Route path="" component={Layout}>
      <Route path="/" component={Home} />
    </Route>
    <Redirect from="/" to="/" />
  </Router>
), document.getElementById('react-root'))
