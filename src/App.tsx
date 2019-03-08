import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
const Home = React.lazy(() => import("./views/Home"));
const LostFound = React.lazy(() => import("./views/LostFound"));
import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/lostfound" component={LostFound} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
