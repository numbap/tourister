import React from 'react';
import './App.css';
import Header from './components/header/header'
import Locations from './components/locations/locations'
import HomePage from './components/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import './firebase/firebase'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/locations/:collectionId' component={Locations} />
      </Switch>
    </div>
  );
}

export default App;
