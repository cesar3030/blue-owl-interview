import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './state/store';
import Header from './shared/components/Header';
import routes from './routes';
import Routes from './shared/components/Routes';

const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className='container mt-4'>
          <Routes routes={routes} />
        </div>
      </Provider>
    </Router>
  );
}
export default App;
