import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter, Link } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import { compose, withHandlers, withState } from 'recompose';
import Services from '../services';
import { links } from './links';

const defProps = { location: '/', index: 0 };

const withIndex = compose(
  withState('index', 'setIndex', ({ index } = defProps) => index || 0),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => link => () => history.push(link),
  })
);

const TabNav = ({ index, hPush, set, match, location, ...rest } = defProps) => (
  <AppBar>
    <Toolbar>
      <Tabs
        centered
        scrollable
        value={index}
        scrollButtons="on"
        textColor="#fff"
        indicatorColor="#fff"
        onChange={set}
      >
        {links.map(l => (
          <Tab key={l.label} label={l.label} to={l.pathname} component={Link} />
        ))}
      </Tabs>
    </Toolbar>
  </AppBar>
);

export default withRouter(withIndex(TabNav));
