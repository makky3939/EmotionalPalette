var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

var Palett = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className='card-title'>{ this.props.text }</h4>
          <Link to={`/palette/${this.props.id}`} className='btn btn-primary'>
            {this.props.id}
          </Link>
        </div>
      </div>
    )
  }
})

module.exports = Palett
