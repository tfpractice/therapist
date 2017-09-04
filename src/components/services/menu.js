import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withState, withHandlers, compose } from 'recompose';
import { Link } from 'react-router-dom';

const wSwitch = withState('open', 'flip', false);
const wAnchor = withState('anchorEl', 'setEl', undefined);
const withBoth = compose(
  wSwitch,
  wAnchor,
  withHandlers({
    toggle: ({ flip }) => e => flip(x => !x),
    setAnchor: ({ setEl }) => e => setEl(e.currentTarget),
    onClick: ({ flip, setEl }) => (e) => {
      flip(x => !x);
      setEl(e.currentTarget);
    },
  })
);
const Services = ({ open, anchorEl, toggle, onClick }) =>
  (<div>
    <Button
      aria-owns={open ? 'simple-menu' : null}
      aria-haspopup="true"
      onClick={onClick}
    >
      Services
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={open}
      onRequestClose={toggle}
    >
      <MenuItem onClick={toggle}>
        <Link to="/diversity">Multiculturalism</Link>
      </MenuItem>
      <MenuItem onClick={toggle}>
        <Link to="/spirituality">Sprituality</Link>
      </MenuItem>
    </Menu>
  </div>);

export default withBoth(Services);
