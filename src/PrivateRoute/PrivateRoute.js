import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import useFirebase from '../hook/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
  const {user} = useFirebase();
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.mail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;