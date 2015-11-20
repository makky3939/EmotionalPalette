var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

var Palett = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    colors: React.PropTypes.array
  },
  render() {
    return (
      <div className='card'>
        <div className='card-block'>
          <p className='card-title clearfix'>
            <b className='pull-left'>{ this.props.text }</b>
            <span className='pull-right'>star: 123</span>
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
          <Link to={'/palette/${this.props.id}'} className='btn btn-primary-outline btn-sm'>
            Detail:{this.props.id}
          </Link>
        </div>
      </div>
    )
  }
})

module.exports = Palett
