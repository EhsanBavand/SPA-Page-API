import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import Home from './Components/home';
import Details from './Components/details';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" render={() => <Home />} />
          <Route path="/details" render={() => <Details />} />
        </header>
      </div>
    </BrowserRouter>

  );
}
export default App;
