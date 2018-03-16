import React from 'react';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';
import withStyles from 'material-ui/styles/withStyles';
import Swipable from 'react-swipeable-views';

import { withIndex } from '../wrappers';
import Spirituality from './spirituality';
import Diversity from './diversity';
import Header from './header';
import Plans from './plans';

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  item: { listStyle: 'none' },
  card: { backgroundColor: theme.cardBack },
});

const Styled = withStyles(styles);

const Services = ({ classes, index, set, changeSet, ...props }) => (
  <Fade in>
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12}>
        <Header index={index} set={set} onChange={changeSet} />
      </Grid>
      <Grid item xs={11}>
        <Swipable onChangeIndex={changeSet} index={index}>
          <Plans />
          <Diversity />
          <Spirituality />
        </Swipable>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(withIndex(Services));
