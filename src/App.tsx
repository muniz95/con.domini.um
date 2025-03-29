import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routes from './routes';
import Store from './store';
import { observer } from 'mobx-react';

const App: React.FC = observer(() => {
  const store = React.useContext(Store);
  store.checkLoggedUser();
  const routing = useRoutes([...routes]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <React.Suspense fallback={<div>Loading...</div>}>
          {routing}
        </React.Suspense>
      </div>
    </div>
  );
});

export default App;
