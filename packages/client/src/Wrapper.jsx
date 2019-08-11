import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Input } from "components";
import SearchResults from './components/SearchResults.jsx'
import TrackFeatures from "./components/TrackFeatures.jsx";

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
        trackId: e.currentTarget.attributes.value.value
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

    let token;

    return (
      <div className="wrapper">
        <div className="input-bar">
          <Input onKeyDown={this.onKeyDown} placeholder="Search for songs"/>
        </div>
        <Query query={tokenQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            token = data.authToken.access_token;
            return (
              <div className="response-containers">
                <SearchResults
                  token={token}
                  search={search}
                  onClick={this.onClick}
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
}
export default Wrapper;