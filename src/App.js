import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './reset.css';
import './App.css';


import Toolbar from './components/Nav/Toolbar/Toolbar';
import SideDrawer from './components/Nav/SideDrawer/SideDrawer';
import Backdrop from './components/Nav/Backdrop/Backdrop';

import routes from './routes'


class App extends Component {
  state = {
    sideDrawerOpen: false,
    user: {}
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
  
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}
        className='App'>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          {routes}
        </main>
      </div>
    );
  }
}

export default withRouter(connect()(App));
