import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Wrapper from "./Wrapper.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Wrapper />
  </ApolloProvider>
);


ReactDOM.render(<App />, document.querySelector("#app"));
