import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link, withRouter } from 'react-router-dom';
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
  console.log('rest', rest, match);
  const links = [
    { pathname: '/', label: 'Natasha Edwards' },
    { pathname: '/about', label: 'about' },
    { pathname: location.pathname, label: <Services /> },
    { pathname: location.pathname, label: 'blog' },
    { pathname: '/contact', label: 'contact' },
  ];

  return (
    <AppBar>
      <Tabs
        centered
        value={index}
        scrollButtons="on"
        textColor="#fff"
        indicatorColor="#f0f"
        onChange={set}
      >
        {links.map(l =>
          <Tab key={l.label} label={l.label} onClick={hPush(l)} />
        )}
      </Tabs>
    </AppBar>
  );
};

export default withRouter(withIndex(TabNav));
