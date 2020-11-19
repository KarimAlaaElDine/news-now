import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react';
import {FeedContainer, SearchBarContainer, store} from "./Store";
import { connect, Provider } from 'react-redux';
import Feed from './Feed';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  const [List, setList] = useState({});

  var l=store.getState().location;

  console.log(store.getState().location);

  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/country/:conId" component={FeedContainer} />
     
    <Route path="/">
    <div style={{marginLeft:'auto',marginRight:'auto', width:'9em'}}>
   
    
      <header className="h1">
        News <br/> Now
      </header>
      
      </div>
      
      <SearchBarContainer/>
     
      </Route>
      
     
      </Switch>

      
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
