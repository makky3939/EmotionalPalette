var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="container">
          <Link className="navbar-brand" to="/generate" >
            EmotionalPalette
          </Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/generate" activeClassName="active">つくる</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse" activeClassName="active">さがす</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar
