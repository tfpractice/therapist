import Grid from 'material-ui/Grid';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import About from '../about';
import Blog from '../blog';
import Contact from '../contact';
import Home from '../home';
import Nav from './nav';
import Services from '../services';

const mainStyles = theme => ({ main: { marginTop: `3rem` }});

const Styled = withStyles(mainStyles, { name: `Home` });

const Main = props => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={12}>
      <Route component={Nav} />
    </Grid>
    <Grid item xs={12} className={props.classes.main}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Grid>
  </Grid>
);

export default Styled(Main);
