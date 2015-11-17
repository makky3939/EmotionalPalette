var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

var Browse = React.createClass({
  render() {
    return (
      <div className='container'>
        <h1>Browse</h1>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-block'>
                <h4 className='card-title'>123</h4>
                <p className='card-text'>123</p>
                <Link className="btn btn-link" to="/palette" >
                  detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Browse
