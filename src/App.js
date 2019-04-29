import React from 'react';
import './App.css';
import Weather from './Weather';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        REACT DASHBOARD
        <div className="widget">
          <Weather />
        </div>
      </div>
    );
}
}

export default App;
