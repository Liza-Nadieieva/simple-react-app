# simple-react-app
Simple react app that uses video.js with the hls plugin. This project uses nwb for the build method.  In order
for the videojs-contrib-hls plugin to play nice with webpack, the webworkify module is swapped out for
webworkify-webpack-dropin module. (i.e, nwb uses webpack under the hood).

Swapping out webworkify for webworkify-webpack-dropin does not work using nwb.  See:

Main issue:
https://github.com/videojs/videojs-contrib-hls/issues/600

Related comments:
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-260686550
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-260693499
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-261107458
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-262288718
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-262527068


## Quick start
1. npm install
2. ./node_modules/nwb/lib/bin/nwb.js serve
3. open up browser and view http://localhost:3000/