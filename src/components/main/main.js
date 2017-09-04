import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Route, Switch } from 'react-router-dom';
import Text from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Home from '../home';
import About from '../about';
import Contact from '../contact';
import { Diversity, Spirituality } from '../services';
import Nav from './nav';
import logo from './logo.svg';
import './App.css';

const mainStyles = theme => ({ main: { marginTop: '3rem' }});
const Styled = withStyles(mainStyles, { name: 'Home' });
const Main = (props) => {
  console.log('props', props);
  return (
    <Grid container justify="center" align="center">
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs className={props.classes.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/diversity" component={Diversity} />
          <Route path="/spirituality" component={Spirituality} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Styled(Main);
