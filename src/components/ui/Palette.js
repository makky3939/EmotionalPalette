var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

// Component
var FavoriteButton = require('../ui/FavoriteButton.js')

var Palett = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {
      palette: false
    };
  },
  componentWillMount: function() {
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/palette.php?id=' + this.props.id, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ZGI6dHN1a3ViYQ=='
      }
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      self.setState({palette: response[0]})
    })
  },
  render: function() {
    return (
      <div className='card'>
        { this.state.palette ?
          (
            <div className='card-block'>
              <p className='card-title'>
                <b>{ this.state.palette.text }</b>
              </p>
              <div className='row'>
                {
                  this.state.palette.colors.map(function(item, index) {
                    var style = {backgroundColor: 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')'}
                    return (
                      <div className='col-xs-20p' style={style} key={index}>
                        <p key={index}></p>
                      </div>
                    )
                  })
                }
              </div>
              <p></p>
              <div className='clearfix'>
                <Link to={'/palette/' + this.props.id} className='btn btn-primary-outline btn-sm pull-left'>
                  詳細 #{this.props.id}
                </Link>
                <div className='pull-right'>
                  <FavoriteButton id={this.props.id} />
                </div>
              </div>
            </div>
          ):
          (
            <div className='card-block text-xs-center'>
              <i className="fa fa-circle-o-notch fa-spin fa-fw" />
            </div>
          )
        }

      </div>
    )
  }
})

module.exports = Palett
