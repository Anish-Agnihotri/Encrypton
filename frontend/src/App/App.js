import React, { Component } from 'react';
import HeadUp from '../Header';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

import SubHeader from '../Dashboard/SubHeader';
import EncryptView from '../Dashboard/EncryptView';
import TextHeader from '../Dashboard/TextHeader';
import ViewView from '../Dashboard/ViewView';
import ViewHeader from '../Dashboard/ViewHeader';
import DocumentationView from '../DocumentationView';
import BusHeader from '../BusHeader';
import ExplorerView from '../ExplorerView';
import StatusView from '../StatusView';
import HomeView from '../HomeView';

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
    <Route exact path='/encrypt' component={Encrypt}></Route>
    <Route exact path='/view' component={View}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
    <HomeView />
  </div>
);

const Explorer = () => (
  <div className='explorer'>
    <BusHeader />
    <ExplorerView />
  </div>
);

const Status = () => (
  <div className='contact'>
    <BusHeader />
    <StatusView />
  </div>
);

const Documentation = () => (
  <div className='status'>
    <BusHeader />
    <DocumentationView />
  </div>
);

const Encrypt = () => (
  <div className='status'>
    <SubHeader />
    <TextHeader />
    <EncryptView />
  </div>
);

const View = () => (
  <div className='status'>
    <SubHeader />
    <ViewHeader />
    <ViewView />
  </div>
);

export default App;
