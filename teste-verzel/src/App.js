import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from './components/Layout';

import Home from './components/_Home/Home.jsx';
import Login from './components/_User/Login/Login.jsx';
import Register from './components/_User/Register/Register.jsx';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        {/* <Redirect from='' to='/login'/> */}
        {/* <Redirect from='**' to='/login'/> */}
      </Layout>
    );
  }
}
