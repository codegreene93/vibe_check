var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config({ path: '../.env'});
var app = express();

var spotifyApi = new SpotifyWebApi();

var client_id = process.env.CLIENT_; // Your client id

var client_secret = process.env.CLIENT_S; // Your secret

var redirect_uri = 'http://localhost:8888/playlists';


spotifyApi.setAccessToken('BQBzY5YZBmCX2oB5Ej_r-6MvXdtFi9ZDjRLrf15xeE6z6ThdwCJdOC3r3_gtfr4c7XzKEPItlk9bORbk8sGbD-xz4Cch63h9yv2c_U-IOKZq689Y5JmqJ2JHQc1fOgxeAqjl4laHkj0pe83mCxxrczrQ4OOxpUY5VjMzxku2DDbITUcft6dH5SNE2A2nY7KCI1X-UiUcMCVn67GC');

spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });


//specify a port to use the app on
var port = process.env.PORT || 8888;


console.log('Listening on 8888');
app.listen(8888);
