var React = require('react')
var whatwgFetch = require('whatwg-fetch')
var reactRouter = require('react-router')
var History = reactRouter.History

var SentenceForm = React.createClass({
  mixins: [ History ],
  onClick(e) {
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/generate.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZGI6dHN1a3ViYQ=='
      },
      body: "text=" + this.refs.text.value
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      self.history.pushState(null, `/palette/${response}`, null);
    })
  },
  render() {
    return (
      <form onsubmit="return false;">
        <fieldset className="form-group">
          <label>Text:</label>
          <input type="text" className="form-control" ref="text" placeholder="Enter Text" />
        </fieldset>
        <div className="btn btn-primary" onClick={this.onClick}>Submit</div>
      </form>
    )
  }
})

module.exports = SentenceForm
