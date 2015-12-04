var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

// Component
var PaletteUi = require('../ui/Palette.js')

var Palette = React.createClass({
  getInitialState: function() {
    return {
      palette: []
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
        self.setState({palette: response})
      }
    })
  },
  render() {
    return (
      <div className='container'>
        <h1>Palette</h1>
        <hr />
        <p>#{this.props.params.paletteId}</p>
        <div className='row'>
          {
            this.state.palette.map(function(item, index) {
              return (
                <div className="col-sm-12" key={index} >
                  <PaletteUi key={index} id={item.id} text={item.text} colors={item.colors} createdAt={item.createdAt}/>
                </div>
              )
            })
          }
        </div>
        <Link className="btn btn-primary" to="/browse" activeClassName="active">Browse</Link>
      </div>
    )
  }
})

module.exports = Palette
