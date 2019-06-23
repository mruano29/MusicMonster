import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Input from "./components/Input.jsx";


class Wrapper extends Component {
    constructor() {
        super();
    }
    render() {
        const query = gql`
              {
                search(search: "nirvana") {
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
          <Query query={query}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return (
                      <ul>
                        {data.search.tracks.items.map(v => (
                          <li>{v.name}</li>
                        ))}
                      </ul>
                    );
                }}
          </Query>
        );
    }
}
export default Wrapper;