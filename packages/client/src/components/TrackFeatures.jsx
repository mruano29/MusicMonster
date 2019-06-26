import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

class trackFeatures extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { trackId, token } = this.props;

      const trackFeatures = gql`
        query trackFeatures($trackId: String!, $token: String!) {
            trackFeatures(trackId: $trackId, token: $token) {
            duration_ms
            key
            mode
            time_signature
            acousticness
            danceability
            energy
            instrumentalness
            liveness
            loudness
            speechiness
            valence
            tempo
            id
            uri
            track_href
            analysis_url
            type
            }
        }
    `;

    return (
        <Query query={trackFeatures} variables={{ trackId, token }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return <ul>
                    {Object.keys(data.trackFeatures).map(v => {
                        return (
                            <li key={v}>{`${v}: ${data.trackFeatures[v]}`}</li>
                        );
                    })}
                </ul>
            }}
        </Query>
    );
  }
}

export default trackFeatures;
