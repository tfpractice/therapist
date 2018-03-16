import React from 'react';
import { withRouter } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({ bar: { padding: '1rem' }});

const Styled = withStyles(styles);

const links = [
  { pathname: '/services', label: 'Services' },
  { pathname: '/diversity', label: 'Diversity' },
  { pathname: '/spirituality', label: 'Spirituality' },
];

const defProps = { location: '/', index: 0 };

const TabNav = ({ index, set, match, location, ...rest } = defProps) => (
  <Toolbar className={rest.classes.bar}>
    <Tabs
      className={rest.classes.bar}
      centered
      value={index}
      scrollButtons="on"
      textColor="secondary"
      indicatorColor="#fff"
      onChange={rest.set}>
      {links.map((l, i) => (
        <Tab key={l.label} label={l.label} onClick={x => rest.onChange(i)} />
      ))}
    </Tabs>
  </Toolbar>
);

export default withRouter(Styled(TabNav));
