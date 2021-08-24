import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackTarget: ''
        };
        this.renderAction = this.renderAction.bind(this);
        //this.addTrack = this.addTrack.bind(this);
        //this.removeTrack = this.removeTrack.bind(this);
        this.displayPlayButton = this.displayPlayButton.bind(this);
        this.moveTracks = this.moveTracks.bind(this);
    }
    
    renderAction() {
         if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.moveTracks}>-</a>;
        } else {
            return <a className="Track-action" onClick={this.moveTracks}>+</a>;
        }
    }
        
    moveTracks() {
        this.props.onMoveTrack(this.props.track, this.props.trackTarget);
        
    }
    
    displayPlayButton() {
        
        if (this.props.playButton) {
          let uri = `https://open.spotify.com/embed?uri=${this.props.track.uri}`
            return (
                <div>
                <div className="PlayButton">
                  <iframe src={uri} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                </div>
            );
            
        } else {
            return (
                <div className="Track-information">
                  <h3>{this.props.track.name}</h3>
                  <p>{this.props.track.artist} | {this.props.track.album.name}</p>
                </div>
            );
        }
    }
    
    render() {
        return(
          <div className="Track">
            {this.displayPlayButton()}
            {this.renderAction()}
          </div>
        );
    }
}

export default Track;
