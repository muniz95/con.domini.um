import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "typeface-roboto";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";
import Store from './store';
import { observer } from "mobx-react";

interface IPrivateRouteProps {
  component: React.FC;
  authed: boolean;
  exact: boolean;
  path: string;
  key: string;
}

const PrivateRoute = ({authed, ...rest}: IPrivateRouteProps) => {
  return authed 
    ? <Route {...rest} />
    : <Redirect to={{pathname: '/login'}} />
}

const App: React.FC = observer(() => {
  const store = React.useContext(Store);
  store.checkLoggedUser();
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map(({ exact, path, component, isPrivate }) => (
                isPrivate
                ? <PrivateRoute
                    authed={store.authenticated}
                    exact={exact}
                    path={`/${path}`}
                    component={component}
                    key={path}
                  />
                : <Route
                    exact={exact}
                    path={`/${path}`}
                    component={component}
                    key={path}
                  />
              ))}
            </Switch>
          </React.Suspense>
        </div>
      </div>
    </Router>
  );
});

export default App;
