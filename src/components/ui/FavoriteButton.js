var React = require('react')
var whatwgFetch = require('whatwg-fetch')

var FavoriteButton = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
  },
  getInitialState: function() {
    return {
      count: 0,
      disabled: false
    };
  },
  componentWillMount: function() {
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/favorite.php?id=' + this.props.id, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ZGI6dHN1a3ViYQ=='
      }
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      self.setState({count: response})
    })
  },
  onClick() {
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/favorite.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZGI6dHN1a3ViYQ=='
      },
      body: "id=" + this.props.id
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      self.componentWillMount()
      self.setState({disabled: true})
      setTimeout(function(){
        if(self.isMounted()) {
          self.setState({disabled: false})
        }
      }, 2400)
    })
  },
  render() {
    return (
      <button className="btn btn-primary-outline btn-sm" onClick={this.onClick} disabled={this.state.disabled}>
        <i className="fa fa-star fa-fw" />
        {this.state.count}
      </button>
    )
  }
})

module.exports = FavoriteButton
