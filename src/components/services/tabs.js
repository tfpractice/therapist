import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';

import { withIndex } from '../wrappers';

const links = [
  { pathname: '/services', label: 'Services' },
  { pathname: '/diversity', label: 'Diversity' },
  { pathname: '/spirituality', label: 'Spirituality' },
];

const defProps = { location: '/', index: 0 };

const TabNav = ({ index, set, match, location, ...rest } = defProps) => (
  <Toolbar>
    <Tabs
      centered
      value={index}
      scrollButtons="on"
      textColor="secondary"
      indicatorColor="#fff"
      onChange={rest.onChange}>
      {links.map((l, i) => (
        <Tab key={l.label} label={l.label} onClick={x => rest.onChange(i)} />
      ))}
    </Tabs>
  </Toolbar>
);

export default withRouter(withIndex(TabNav));
