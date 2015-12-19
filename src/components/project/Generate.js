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
  render: function() {
    return (
      <div className='col-xs-12'>
        <div className='row colorful'>
          <div className='container'>
            <div className='col-md-6 col-md-offset-3'>
              <SentenceForm />
            </div>
          </div>
        </div>

        <div className='container'>
          <h2>使い方</h2>
          <p>このアプリでは、言葉から色の組み合わせ（パレット）をつくることが出来ます。</p>
          <span>資料: </span>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/s1311495-f-Kobayashi-Masaki.ppt'
            className='btn btn-primary-outline btn-sm'
            target='_blank'
          >
          <i className="fa fa-file-powerpoint-o fa-fw" />.ppt</a>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/s1311495-f-Kobayashi-Masaki.pdf'
            className='btn btn-primary-outline btn-sm'
            target='_blank'
          ><i className="fa fa-file-pdf-o fa-fw" />.pdf</a>
          <h3>1.パレットを作る</h3>
          <hr />
          <p>
            入力フォームに言葉を入力して、「パレットを作る」ボタンを押します。
            日本語以外を入力すると、黒(#000000)が作られます。
          </p>
          <div className='container'>
            <div className='col-md-6 col-md-offset-3'>
              <SentenceForm isMock={true}/>
            </div>
          </div>
          <h3>2.パレットを楽しむ</h3>
          <hr />
          <p>
            言葉を入力すると、次のようなカラーパレットが作られます。
            お気に入りの「パレット」は出来ましたか？
          </p>
          <p>
            「詳細」を押すと、色の詳細情報を確認することが出来ます。
          </p>
          <div className='container'>
            <div className='col-md-6 col-md-offset-3'>
              { this.state.palette[0]?
                <Palette id={this.state.palette[0].id} />:
                null
              }
            </div>
          </div>
        </div>

        <div className='container'>
          <h3>3.パレットを見つける</h3>
          <hr />
          <p>
            ページ上部にある、「さがす」ボタンを押すとこれまでに作られた「パレット」を見ることが出来ます。
            お気に入りの「パレット」を見つけたら「
            <i className="fa fa-star fa-fw" />
            」を押しましょう。
          </p>
          <p>
            人気のパレットを紹介します。
          </p>
          <div className='row'>
            {
              this.state.palette.map(function(item, index) {
                return (
                  <div className="col-sm-4" key={index} >
                    <Palette key={index} id={item.id} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='row colorful'>
          <div className='container'>
            <div className='col-md-6 col-md-offset-3'>
              <SentenceForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Generate
