import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    render() {
        return(
          <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList isRemoval={false} trackTarget='Playlist' tracks={this.props.searchResults} onMoveTrack={this.props.onMoveTrack} playButton={true}/>
          </div>
        );
    }
}

export default SearchResults;