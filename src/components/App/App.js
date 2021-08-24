import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          playlistName: 'New Playlist',
          playlistTracks: [],
          searchResults: [],
          privatePlaylist: false
      };
      //this.addTrack = this.addTrack.bind(this);
      //this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
      this.clearPlaylist = this.clearPlaylist.bind(this);
      this.privatePlaylist = this.privatePlaylist.bind(this);
      this.moveTrack = this.moveTrack.bind(this);
  }


  moveTrack(track, trackTarget) {
      let playlistTracks = this.state.playlistTracks;
      let searchResults = this.state.searchResults;
      
      if (trackTarget === 'Playlist') {
          //add the track to playlist
          playlistTracks.push(track);
          //Remove track from search
          searchResults = searchResults.filter(movedTrack => movedTrack.id !== track.id);      
          //update state
          this.setState({searchResults: searchResults});
          this.setState({playlistTracks: playlistTracks});
       } else if (trackTarget === 'SearchResults') {
          //move the track from playlist to search, remove from playlist
          searchResults.unshift(track);
          //Remove track from Playlist
          playlistTracks = playlistTracks.filter(movedTrack => movedTrack.id !== track.id);
          //update state
          this.setState({searchResults: searchResults});
          this.setState({playlistTracks: playlistTracks});
       }
  }

  updatePlaylistName(name) {
      this.setState({playlistName: name});
  }
    
  clearPlaylist() {
      this.setState({
          playlistTracks: [],
          playlistName: ''
      })
  }
    
  savePlaylist() {
      let trackURIs = this.state.playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(this.state.playlistName, trackURIs, this.state.privatePlaylist).then(() => {
        this.clearPlaylist();
      });
  }
    
  search(term) {
    Spotify.search(term).then(results => {
      this.setState({searchResults: results});                
    });
  }
  
  privatePlaylist() {
      this.state.privatePlaylist ? this.setState({privatePlaylist: false}) : this.setState({privatePlaylist: true})
  }
    
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onMoveTrack={this.moveTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onClear={this.clearPlaylist} onMoveTrack={this.moveTrack}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
