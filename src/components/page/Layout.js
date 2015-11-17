var React = require('react')

// Component
// import Navbar from '../project/Navbar.js'
// import Footer from '../project/Footer.js'

module.exports = React.createClass({
  render() {
    return (
      <div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
})
