var React = require('react')
var whatwgFetch = require('whatwg-fetch')
var reactRouter = require('react-router')
var Link = reactRouter.Link

// Component
var Palette = require('../ui/Palette.js')

var Browse = React.createClass({
  getInitialState: function() {
    return {
      palette: []
    };
  },
  componentWillMount: function() {
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/palettes.php', {
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
        self.setState({palette: response})
      }
    })
  },
  render: function() {
    return (
      <div className='container'>
        <h1>さがす</h1>
        <hr />
        <div className='row'>
          {
            this.state.palette.map(function(item, index) {
              return (
                <div className="col-md-4 col-sm-6 col-xs-12" key={index} >
                  <Palette key={index} id={item.id} text={item.text} colors={item.colors} createdAt={item.createdAt}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
})

module.exports = Browse
