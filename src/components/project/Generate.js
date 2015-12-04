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
            <p>小林 正樹 (学籍番号:201311495)</p>
            <h3>テーブル一覧(課題7)</h3>
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
      </div>
    )
  }
})

module.exports = Generate
