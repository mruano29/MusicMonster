import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

class SearchResults extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { search, token, onClick } = this.props;

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
                                        onClick={onClick}
                                    >
                                        {`track: ${v.name} | artist: ${v.artists[0].name}`}
                                    </li>
                                );
                            })}
                        </ul>
                    );
                }}
            </Query>
        )
    }
}

export default SearchResults;