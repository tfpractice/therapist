import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Route } from 'react-router-dom';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Nav from './nav';
import logo from './logo.svg';
import './App.css';

const Main = (props) => {
  console.log('props', props);
  return (
    <Grid container justify="center" align="center">
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs>
        <Text>Welcome to React</Text>
      </Grid>
    </Grid>
  );
};

export default Main;
