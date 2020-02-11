import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

function Routes({ routes }) {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
}

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Routes;
