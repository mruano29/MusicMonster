import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import '../styles.css'

const SearchResults = ({  search, token, onClick }) => {

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
                  <div className="search-results">
                      {data.search.tracks.items.map(v => {
                          return (
                              <div
                                  className="search-results-item"
                                  key={v.id}
                                  value={v.id}
                                  onClick={onClick}
                              > 
                                <div className="search-results-item__song">{v.name}</div>
                                <div className="search-results-item__artist">{`${v.artists[0].name} | ${v.album.name}`}</div>  
                              </div>
                          );
                      })}
                  </div>
              );
          }}
      </Query>
    )
    // }
}

export default SearchResults;
