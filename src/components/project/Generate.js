var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link

// Component
var SentenceForm = require('../ui/SentenceForm.js')

var Generate = React.createClass({
  render() {
    return (
      <div className='container'>
        <h1>Generate</h1>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-block'>
                <SentenceForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Generate
