import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Nav from './components/nav';
import Items from './components/items';
import ItemDetails from './components/itDetails';
import Home from './components/home';

export default function App() {
  return (
    <Router>
      {/* this part would be shared between all components it has links to routes*/}
      <Nav/>    

      {/* here we handle our routes declared using LINK */}
      <Switch>
        <Route  path="/" exact>
          <Home/>
        </Route>
        <Route path="/items" exact>
          <Items /> 
        </Route>
        <Route path="/items/:id" component={ItemDetails}/>

        <Route path="/it" exact>
            <h1>test</h1> 
        </Route>
      </Switch>
    </Router>
  );
}