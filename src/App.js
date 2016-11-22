import React from 'react'
import ReactDom from 'react-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">
      <video id={`my-video`}
      className='video-js vjs-default-skin vjs-big-play-centered'
      style={{height: '300px', width: '600px'}}
      controls></video>
    </div>
  }
}

