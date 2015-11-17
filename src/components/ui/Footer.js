var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

var Footer = React.createClass({
  render() {
    return (
      <footer className='container'>
        <hr />
        <p>
          <span>&copy; makky.io All Rights Reserved.<br /></span>
          <span>EmotionalPalette</span>
        </p>
      </footer>
    )
  }
})

module.exports = Footer
