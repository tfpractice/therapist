import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import { Link, withRouter } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import { compose, withHandlers, withState } from 'recompose';

const links = [
  { pathname: '/', label: 'Natasha Edwards' },
  { pathname: '/', label: 'about' },
  { pathname: '/', label: 'services' },
  { pathname: '/', label: 'spiritualty' },
  { pathname: '/', label: 'contact' },
];
const Nav = props =>
  (<AppBar>
    <Toolbar>
      <Grid container justify="center" align="center">
        {links.map(l =>
          (<Grid item xs>
            <Link to={l.pathname}>
              <Text type="headline" color="secondary">
                {l.label}
              </Text>
            </Link>
          </Grid>)
        )}
      </Grid>
    </Toolbar>
  </AppBar>);

const defProps = { location: '/', index: 0 };

const withIndex = compose(
  withState(
    'index',
    'setIndex',
    ({ index, location } = defProps) => index || 0
  ),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => link => () => history.push(link),
  })
);

const TabNav = ({ index, hPush, set } = defProps) =>
  (<AppBar>
    <Tabs
      centered
      index={index}
      scrollButtons="on"
      textColor="#fff"
      indicatorColor="#f0f"
      onChange={set}
    >
      {links.map(l => <Tab key={l.label} label={l.label} onClick={hPush(l)} />)}
    </Tabs>
  </AppBar>);

export default withRouter(withIndex(TabNav));

// export default Nav;
