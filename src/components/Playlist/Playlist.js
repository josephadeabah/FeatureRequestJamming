import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    
  
  handleNameChange(event) {
    this.props.onNameChange(event.target.value)
  }
  
    
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
    render() {
        return(
          <div className="Playlist">
            <input placeholder="Enter Playlist Name" defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList playlistName={this.props.playlistName} tracks={this.props.playlistTracks} isRemoval={true} playButton={false} onMoveTrack={this.props.onMoveTrack} trackTarget='SearchResults' />
            <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
                <a className="Playlist-save" onClick={this.handleClick}>{this.state.isToggleOn ? 'PUBLIC' : 'PRIVATE'}</a>
                <a className="Playlist-save" onClick={this.props.onClear}>CLEAR PLAYLIST</a>
            </div>
        );
    }
}

export default Playlist;