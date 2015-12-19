var React = require('react')
var whatwgFetch = require('whatwg-fetch')
var reactRouter = require('react-router')
var History = reactRouter.History

var SentenceForm = React.createClass({
  propTypes: {
    isMock: React.PropTypes.bool
  },
  mixins: [ History ],
  onClick: function(e) {
    if(this.refs.text.value.length == 0) {
     return 0;
    }
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/generate.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZGI6dHN1a3ViYQ=='
      },
      body: ("text=" + this.refs.text.value)
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      self.history.push('/palette/' + response);
      // window.location.href = ('/~s1311495/#/palette/' + response);
      return 0;
    })
  },
  render: function() {
    return (
      <div className='card'>
        <form onsubmit="return false;">
          <div className="card-header text-xs-center">
            言葉を色にしてみよう
          </div>
          <div className='card-block'>
              <input type="text" className="form-control" ref="text" placeholder="小さな恋のうた" required="true" disabled={this.props.isMock}/>
          </div>
          <div className="card-footer">
            <div className='text-xs-center'>
              <div className="btn btn-primary btn-sm" onClick={this.onClick} disabled={this.props.isMock}>
                パレットをつくる
                <i className="fa fa-paint-brush fa-fw" />
              </div>
              { this.props.isMock?
                <small><br/>※これは見本です</small>:null
              }
            </div>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SentenceForm
