var React = require('react')

var Footer = React.createClass({
  render() {
    return (
      <footer className='container'>
        <hr />
        <p className=''>
          <div className='pull-left'>
            <span>&copy; EmotionalPalette All Rights Reserved.</span>
          </div>
          <div className='pull-right'>
            <a
              href='https://github.com/makky3939/EmotionalPalette'
              target='_blank'
            >GitHub</a>
          </div>
        </p>
      </footer>
    )
  }
})

module.exports = Footer
