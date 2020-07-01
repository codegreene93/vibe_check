var express = require('express');
var request = require("request");
var user_id = "Matt";
var token = "Bearer";
var app = express();

//specify a port to use the app on
var port = process.env.PORT || 8881;

var playlists_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:playlists_url, headers:{"Authorization":token}}, function(err, res){
  if(res){
    var playlists = JSON.parse(res.body);
    var playlist_url = playlists.items[0].href;
    request({url: playlists_url, headers:{"Authorization":token}}, function(err, res){
      if(res){
          var playlist = JSON.parse(res.body);
            console.log("playlist: " + playlist.name)
          playlist.tracks.forEach(function(track){
            console.log(track.track.name);
          });
      }
    });
  }
});

console.log('Listening on 8881');
app.listen(8881);
