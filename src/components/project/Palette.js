var React = require('react')

var Palette = React.createClass({
  render() {
    return (
      <div className='container'>
        <h1>
          Palette
          <span>#{this.props.params.paletteId}</span>
        </h1>
      </div>
    )
  }
})

module.exports = Palette
