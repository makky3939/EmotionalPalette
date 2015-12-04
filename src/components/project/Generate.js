var React = require('react')
var reactRouter = require('react-router')
var Link = reactRouter.Link
var whatwgFetch = require('whatwg-fetch')

// Component
var SentenceForm = require('../ui/SentenceForm.js')
var Palette = require('../ui/Palette.js')

var Generate = React.createClass({
  getInitialState: function() {
    return {
      palette: []
    };
  },
  componentWillMount: function() {
    var self = this;
    fetch('http://turkey.slis.tsukuba.ac.jp/~s1311495/api/v1/popular_palettes.php', {
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
        <h1>Generate</h1>
        <hr />
        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <div className='card'>
              <div className='card-block'>
                <SentenceForm />
              </div>
            </div>
          </div>
        </div>

        <h2>概要</h2>
        <hr />
        <div className='row'>
          <div className='col-xs-12'>
            <h3>アプリ名</h3>
            <p>EmotionalPalette</p>
            <h3>開発者</h3>
            <p>小林 正樹 : 学籍番号 201311495</p>
            <h3>Source code</h3>
            <p><a
              href='https://github.com/makky3939/EmotionalPalette'
              className='btn btn-primary-outline btn-sm'
              target='_blank'
            >GitHub</a></p>
            <h3>テーブル一覧 : 課題7</h3>
            <p>
              <a
                href='http://turkey.slis.tsukuba.ac.jp/~s1311495/sentence.php'
                className='btn btn-primary-outline btn-sm'
                target='_blank'
              >Sentence table</a>

              <a
                href='http://turkey.slis.tsukuba.ac.jp/~s1311495/color.php'
                className='btn btn-primary-outline btn-sm'
                target='_blank'
              >Color table</a>

              <a
                href='http://turkey.slis.tsukuba.ac.jp/~s1311495/favorite.php'
                className='btn btn-primary-outline btn-sm'
                target='_blank'
              >Favorite table</a>
            </p>
          </div>
        </div>

        <h2>Most popular palettes</h2>
        <hr />
        <div className='row'>
          {
            this.state.palette.map(function(item, index) {
              return (
                <div className="col-sm-4" key={index} >
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

module.exports = Generate
