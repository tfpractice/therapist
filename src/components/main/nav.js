import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter, Link } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import { compose, withHandlers, withState } from 'recompose';

import Services from '../services';

const defProps = { location: '/', index: 0 };

const withIndex = compose(
  withState('index', 'setIndex', ({ index } = defProps) => index || 0),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => link => () => history.push(link),
  })
);

const TabNav = ({ index, hPush, set, match, location, ...rest } = defProps) => {
  const links = [
    { pathname: '/', label: 'Natasha Edwards' },
    { pathname: '/about', label: 'about' },
    { pathname: '/services', label: 'Services' },
    { pathname: '/diversity', label: 'Diversity' },
    { pathname: '/spirituality', label: 'Spirituality' },
    { pathname: '/contact', label: 'contact' },
  ];

  return (
    <AppBar>
      <Tabs
        centered
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
    </AppBar>
  );
};

export default withRouter(withIndex(TabNav));
