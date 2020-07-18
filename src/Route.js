import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home  from './components/Home'
import about  from './components/about'
import product from './components/Product'
import Productitem  from './components/Productitem'
import Navebar  from './components/Navebar'


export default function Routeconfig() {
  return (
    <div>
        <Router>
        <Navebar/>
        <Switch>
        <Route exact path="/"component={Home}/>
          <Route  path="/about" component={about}/>
          <Route exact path="/product" component={product}/>
          <Route path="/product/:id"component={Productitem}/> 
          <Route path="*"component={()=><h2>404 not Found</h2>}/>
        </Switch>
        </Router>
      </div>
  )}