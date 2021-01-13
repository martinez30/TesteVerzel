import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Layout from './components/Layout';
import Home from './components/_Home/Home.jsx';
import Edit from './components/_Edit/Edit.jsx';
import Login from './components/_User/Login/Login.jsx';
import Register from './components/_User/Register/Register.jsx';
import Error404 from './components/Error404';

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
        <Layout>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/task' component={Edit}/>
            <PrivateRoute exact path='/task/:id' component={Edit}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={Error404} />
          </Switch>
      </Layout>
    );  

    export default Routes