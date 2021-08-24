import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return(
          <div className="TrackList">
            {this.props.tracks.map(track => {
              return <Track track={track} key={track.id} trackTarget={this.props.trackTarget} onMoveTrack={this.props.onMoveTrack} isRemoval={this.props.isRemoval} playButton={this.props.playButton}/>
              })
            }
          </div>
        )
    }
}

export default TrackList;