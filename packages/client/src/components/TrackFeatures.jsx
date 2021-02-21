import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import "../styles.css";

const trackFeatures = ({ trackId, token }) => {
  
    const trackFeatures = gql`
      query trackFeatures($trackId: String!, $token: String!) {
          trackFeatures(trackId: $trackId, token: $token) {
          # duration_ms
          duration
          key
          mode
          time_signature
          # acousticness
          # danceability
          energy
          # instrumentalness
          # liveness
          loudness
          # speechiness
          # valence
          tempo
          # id
          # uri
          # track_href
          # analysis_url
          # type
          }
      }
    `;

    return (
        <Query query={trackFeatures} variables={{ trackId, token }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return <div className="track-features">
                    {Object.keys(data.trackFeatures).map(v => {
                      if (v === "__typename") {
                        return
                      }
                        return (
                          <div key={v} className="features-box">
                            <div className="features-box__data">{data.trackFeatures[v]}</div>
                            <div className="features-box__title">{v}</div>
                          </div>
                        );
                    })}
                </div>
            }}
        </Query>
    );
  
}

export default trackFeatures;
