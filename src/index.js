import React from 'react'
import {render} from 'react-dom'
import videojs from 'video.js'
import 'videojs-contrib-hls';

import App from './App'

render(<App/>, document.querySelector('#app'))

var player = videojs('my-video', {autoplay: true});
player.src({src: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8', type: 'application/x-mpegURL'});
