import React, { Component } from 'react';
import HeadUp from '../Header';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

import SubHeader from '../Dashboard/SubHeader';
import EncryptView from '../Dashboard/EncryptView';

const App = () => (
  <div className='app'>
    <HeadUp />
    <Main />
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/explorer' component={Explorer}></Route>
    <Route exact path='/status' component={Status}></Route>
    <Route exact path='/documentation' component={Documentation}></Route>
    <Route exact path='/help' component={Help}></Route>
    <Route exact path='/encrypt' component={Encrypt}></Route>
    <Route exact path='/view' component={View}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
    <h1>Home Router</h1>
  </div>
);


const Explorer = () => (
  <div className='main'>
    <h1>Explorer Router</h1>
  </div>
);

const Status = () => (
  <div className='contact'>
    <h1>Status Router</h1>
  </div>
);

const Documentation = () => (
  <div className='status'>
    <h1>Documentation Router</h1>
  </div>
);

const Help = () => (
  <div className='status'>
    <h1>Help Router</h1>
  </div>
);

const Encrypt = () => (
  <div className='status'>
    <SubHeader />
    <EncryptView />
  </div>
);

const View = () => (
  <div className='status'>
    <SubHeader />
    <h1>View Router</h1>
  </div>
);

export default App;
