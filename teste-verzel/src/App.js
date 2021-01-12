import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { Layout } from './components/Layout';

import Home from './components/_Home/Home.jsx';
import Login from './components/_User/Login/Login.jsx';
import Register from './components/_User/Register/Register.jsx';

import { isAuthenticated } from './auth/auth.guard'

import './custom.css'

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login"}} />
        )
      }
    />
  );

  const Routes = () => (
      <Switch>
        <Layout>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            {/* <Redirect from='' to='/login'/> */}
            {/* <Redirect from='**' to='/login'/> */}
        </Layout>
      </Switch>
    );

    export default Routes
