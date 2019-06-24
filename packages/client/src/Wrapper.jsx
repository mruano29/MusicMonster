import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Input from "./components/Input.jsx";


class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(data) {
          this.setState({
            search: data
        })
    }

  render() {
    console.log(this)
    const { search } = this.state;


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


    return (
      <div>
        <Input onKeyDown={this.onKeyDown} />
        <Query query={tokenQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const token = data.authToken.access_token;
            return (
              <Query query={query} variables={{ search, token }}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error :(</p>;
                  return (
                    <ul>
                      {data.search.tracks.items.map((v, index) => {
                          console.log(v);
                        return <li key={index}>{v.name}</li>
                      })}
                    </ul>
                  );
                }}
              </Query>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default Wrapper;