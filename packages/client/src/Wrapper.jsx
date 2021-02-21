import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Input } from "components";
import SearchResults from './components/SearchResults.jsx'
import TrackFeatures from "./components/TrackFeatures.jsx";

import './styles.css';

const Wrapper = () => {
  const [search, setSearch] = useState("");
  const [trackId, setTrackId] = useState("");
  const [token, setToken] = useState(null);

    const tokenQuery = gql`
      {
        authToken {
          access_token
        }
      }
    `;

    // let token;

  useEffect(() => {
    // necesito logearme primero con => Required scopes: ["streaming", "user-read-email", "user-read-private"]
    // console.log("window", window)
    // window.onSpotifyWebPlaybackSDKReady = () => {
    //   console.log("entra qui????")
    //   const token = token;
    //   const player = new Spotify.Player({
    //     name: 'Web Playback SDK Quick Start Player',
    //     getOAuthToken: cb => { cb(token); }
    //   });

    //   // Error handling
    //   player.addListener('initialization_error', ({ message }) => { console.error(message); });
    //   player.addListener('authentication_error', ({ message }) => { console.error(message); });
    //   player.addListener('account_error', ({ message }) => { console.error(message); });
    //   player.addListener('playback_error', ({ message }) => { console.error(message); });

    //   // Playback status updates
    //   player.addListener('player_state_changed', state => { console.log(state); });

    //   // Ready
    //   player.addListener('ready', ({ device_id }) => {
    //     console.log('Ready with Device ID', device_id);
    //   });

    //   // Not Ready
    //   player.addListener('not_ready', ({ device_id }) => {
    //     console.log('Device ID has gone offline', device_id);
    //   });

    //   // Connect to the player!
    //   player.connect();
    // };
  }, [token])
    
  return (
    <div className="wrapper">
      <div className="input-bar">
        <Input onKeyDown={(e) => {
          setSearch(e);
          setTrackId("");
        }} placeholder="Search for songs"/>
      </div>
      <Query query={tokenQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          // token = data.authToken.access_token;
          setToken(data.authToken.access_token);
          return (
            <div className="response-containers">
              <SearchResults
                token={token}
                search={search}
                onClick={(e) => {
                  setTrackId(e.currentTarget.attributes.value.value)
                }}
              />
              {trackId && (
                <TrackFeatures token={token} trackId={trackId} />
              )}
            </div>
          );
        }}
      </Query>
    </div>
  );
}
export default Wrapper;
