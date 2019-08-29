import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import routes from './routes';
import 'typeface-roboto';
import './App.css';

const App: React.FC = () =>
  <Router>
    <div className="App">
      <Header />
      <div className="container">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map(({exact, path, component}) =>
              <Route exact={exact} path={`/${path}`} component={component} key={path} />
            )}
          </Switch>
        </React.Suspense>
      </div>
    </div>
  </Router>;

export default App;
