import React from 'react';
import './App.css';
import Weather from './Weather';
import Fortune from './Fortune';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        REACT DASHBOARD
        <div className="box">
          <div className="widget">
            <Weather />
          </div>
          <div className="widget">
            <Fortune />
          </div>
        </div>
      </div>
    );
}
}

export default App;
