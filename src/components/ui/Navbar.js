var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

var Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <div className="container">
          <Link className="navbar-brand" to="/" >
            EmotionalPalette
          </Link>
          <ul className="nav navbar-nav pull-right">
            <li className="nav-item">
              <Link className="nav-link" to="/browse" activeClassName="active">Browse</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar
