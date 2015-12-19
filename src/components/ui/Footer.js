var React = require('react')

var Footer = React.createClass({
  render: function() {
    return (
      <footer className='container'>
        <hr />
        <div className='text-xs-center'>
          <span>App name: EmotionalPalette</span>
          <br />
          <span>Developer: Masaki KOBAYASHI (201311495)</span>
          <br />
          <span>Tables:</span>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/sentence.php'
            className='btn btn-link btn-sm'
            target='_blank'
          >Sentence table</a>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/color.php'
            className='btn btn-link btn-sm'
            target='_blank'
          >Color table</a>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/favorite.php'
            className='btn btn-link btn-sm'
            target='_blank'
          >Favorite table</a>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/dictionary.php'
            className='btn btn-link btn-sm'
            target='_blank'
          >Dictionary table</a>
          <br />
          <span>&copy; EmotionalPalette All Rights Reserved.</span>
          <br />
          <span>Slide:</span>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/s1311495-f-Kobayashi-Masaki.ppt'
            className='btn btn-link btn-sm'
            target='_blank'
          >.ppt</a>
          <a
            href='http://turkey.slis.tsukuba.ac.jp/~s1311495/s1311495-f-Kobayashi-Masaki.pdf'
            className='btn btn-link btn-sm'
            target='_blank'
          >.pdf</a>
          <br />
          <span>Source code:</span>
          <a
            href='https://github.com/makky3939/EmotionalPalette'
            className='btn btn-link btn-sm'
            target='_blank'
          >GitHub</a>
        </div>
      </footer>
    )
  }
})

module.exports = Footer
