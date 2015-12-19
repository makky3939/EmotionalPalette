var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

// Component
var PaletteUi = require('../ui/Palette.js')
var FavoriteButton = require('../ui/FavoriteButton.js')

var Palette = React.createClass({
  getInitialState: function() {
    return {
      palette: false
    };
  },
  componentDidMount: function() {
    var self = this;
    fetch(('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/palette.php?id=' + self.props.params.paletteId), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZGI6dHN1a3ViYQ=='
      }
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      if (response !== null) {
        self.setState({palette: response[0]})
      }
    })
  },
  render: function() {
    return (
      <div className='container'>
        <h1>
          Palette
          <span>#{this.props.params.paletteId}</span>
        </h1>
        <hr />
        { this.state.palette ?
          (<div>
            <div className='col-xs-12'>
              <div className='row'>
                <h2>{this.state.palette.text}</h2>
              </div>
              <div className='row'>
                {
                  this.state.palette.colors.map(function(item, index) {
                    var style = {
                      backgroundColor: 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')',
                      height: '300px'
                    }
                    return (
                      <div className='col-xs-20p' style={style} key={index}>
                        <p key={index}><br/></p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <p className='clearfix'></p>
            <div className='row'>
              {
                this.state.palette.colors.map(function(item, index) {
                  var style = {
                    backgroundColor: 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')',
                    height: '3rem'
                  }
                  return (
                    <div className='col-sm-4' key={index}>
                      <div className='card' key={index}>
                        <div className='card-header text-xs-center' key={index}>
                          #{index}
                        </div>
                        <div className='card-block' style={style} key={index+1}>
                        </div>
                        <div className='card-footer text-xs-center' key={index+2}>
                          {'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')'}
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div></div>
          ):(
            <div className='card-block text-xs-center'>
              <i className="fa fa-circle-o-notch fa-spin fa-fw" />
            </div>
          )
        }
        <div className='col-xs-12'>
          <div className='row'>
            <hr />
            <div className='clearfix'>
              <Link className="btn btn-primary" to="/browse" activeClassName="active">
                <i className="fa fa-angle-double-left fa-fw" />
                Back
              </Link>
              <div className='pull-right'>
                <FavoriteButton id={this.props.params.paletteId - 0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Palette
