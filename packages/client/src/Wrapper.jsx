import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Input from "./components/Input.jsx";

import './styles.css';


class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            trackId: ''
        }

        this.onKeyDown = this.onKeyDown.bind(this);
      this.onClick = this.onClick.bind(this);
    }

    onKeyDown(data) {
        this.setState({
          search: data,
          trackId: ''
        });
    }

    onClick(e) {
      this.setState({
        trackId: e.target.attributes.value.value
      });
    }

  render() {
    const { search , trackId } = this.state;


    const tokenQuery = gql`
      {
        authToken {
          access_token
        }
      }
    `;

    const query = gql`
      query search($search: String!, $token: String!) {
        search(search: $search, token: $token) {
          tracks {
            href
            items {
              name
              album {
                name
              }
              artists {
                name
              }
              id
            }
          }
        }
      }
    `;

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

    let token;

    console.log("token 1 ", token)

    return (
      <div className="wrapper">
        <div>
          <Input onKeyDown={this.onKeyDown} />
          <Query query={tokenQuery}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              token = data.authToken.access_token;
              return (
                <Query query={query} variables={{ search, token }}>
                  {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return (
                      <ul>
                        {data.search.tracks.items.map((v, index) => {
                          return (
                            <li
                              key={v.id}
                              value={v.id}
                              onClick={this.onClick}
                            >
                              {v.name}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }}
                </Query>
              );
            }}
          </Query>
        </div>
        {trackId && (
          <div>
            <Query query={tokenQuery}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                token = data.authToken.access_token;
                return (
                  <Query query={trackFeatures} variables={{ trackId, token }}>
                    {({ loading, error, data }) => {
                      console.log("token 2", token);
                      if (loading) return <p>Loading...</p>;
                      if (error) return <p>Error :(</p>;
                        console.log(Object.keys(data.trackFeatures))
                      return <ul>
                        {Object.keys(data.trackFeatures).map(v => {
                          return (
                            <li>{`${v}: ${data.trackFeatures[v]}`}</li>
                          );
                        })}
                      </ul>
                    }}
                  </Query>
                );
              }}
              </Query>
          </div>
        )}
      </div>
    );
  }
}
export default Wrapper;