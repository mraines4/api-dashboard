import React from 'react';
import './App.css';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to="/weather">Weather</Link>
        <Link to="/fortune">Fortune</Link>
        <Link to="/joke">Joke</Link>
        <Link to="/all">Dashboard</Link>
      </header>      
      <Switch>
        <Route path="/weather" component={Weather} />
        <Route path="/fortune" component={Fortune} />
        <Route path="/joke" component={Joke} />
        <Route path="/all" component={() => (
          <div className="box">
              <Weather className="widget" />
              <Fortune />
              <Joke />
          </div>
        )} />
      </Switch>

      </div>
    );
}
}

export default App;
