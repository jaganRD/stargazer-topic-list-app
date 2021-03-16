import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Stargazers from "./stargazers/Stargazers-page/components/Stargazers/Stargazers";
import StargazersHomePage from "./stargazers/Stargazers-page/StargazersHomePage";
import client from "./shared/apolloClient";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
            <Route path="/" component={StargazersHomePage} exact />
            <Route path="/topicList" component={Stargazers} />
        </Switch>
      </BrowserRouter>
        
      </ApolloProvider>
    </div>
  );
}


export default App;
