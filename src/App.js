import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Quotes from "./Containers/Quotes/Quotes";
import NewQuote from "./Containers/NewQuote/NewQuote";
import EditQuote from "./Containers/EditQuote/EditQuote";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Quotes}/>
        <Route path="/add-quote" component={NewQuote}/>
        <Route path="/quotes/:id/edit" component={EditQuote}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
