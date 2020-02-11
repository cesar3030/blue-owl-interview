import React, { useEffect } from 'react';

import Header from './shared/components/Header';
import routes from './routes';
import Routes from './shared/components/Routes';
import { useDispatch } from 'react-redux';
import { fetchLocation } from './state/location';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function() {
      dispatch(fetchLocation());
    })();
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes routes={routes} />
    </>
  );
}
export default App;
