var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

// Component
var FavoriteButton = require('../ui/FavoriteButton.js')

var Palett = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    colors: React.PropTypes.array,
    createdAt: React.PropTypes.string
  },
  render() {
    return (
      <div className='card'>
        <div className='card-block'>
          <p className='card-title clearfix'>
            <b className='pull-left'>{ this.props.text }</b>
            <span className='pull-right'>{ this.props.createdAt }</span>
          </p>
          <div className='row'>
            <div className='col-xs-1'><p></p></div>
            {
              this.props.colors.map(function(item, index) {
                var style = {backgroundColor: 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')'}
                return (
                  <div className='col-xs-2' style={style} key={index}>
                    <p key={index}></p>
                  </div>
                )
              })
            }
          </div>
          <p></p>
          <div className='clearfix'>
            <Link to={`/palette/${this.props.id}`} className='btn btn-primary-outline btn-sm pull-left'>
              Detail #{this.props.id}
            </Link>
            <div className='pull-right'>
              <FavoriteButton id={this.props.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Palett
