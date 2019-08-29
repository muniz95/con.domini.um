import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
const Home = React.lazy(() => import("./views/Home"));
const LostFound = React.lazy(() => import("./views/LostFound"));
const Administrator = React.lazy(() => import("./views/Administrator"));
import 'typeface-roboto';
import './App.css';

const App: React.FC = () =>
  <Router>
    <div className="App">
      <Header />
      <div className="container">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/lostfound" component={LostFound} />
            <Route path="/administrator" component={Administrator} />
          </Switch>
        </React.Suspense>
      </div>
    </div>
  </Router>;

export default App;
