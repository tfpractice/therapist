import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter, Link } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import withStyles from 'material-ui/styles/withStyles';

import { withIndex } from '../wrappers';
import { links } from './links';

const styles = theme => ({ bar: { backgroundColor: '#607d8bcc' }});

const Styled = withStyles(styles);

const defProps = { location: '/', index: 0 };

const TabNav = ({ index, hPush, set, match, location, ...rest } = defProps) => (
  <AppBar className={rest.classes.bar}>
    <Toolbar>
      <Grid container justify="center" alignContent="center">
        <Tabs
          centered
          scrollable
          value={index}

          // scrollButtons="on"
          textColor="secondary"
          indicatorColor="#fff"
          onChange={set}>
          {links.map(l => (
            <Tab
              key={l.label}
              label={l.label}
              to={l.pathname}
              component={Link}
            />
          ))}
        </Tabs>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withRouter(withIndex(Styled(TabNav)));
