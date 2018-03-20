import React from 'react';
import Grid from 'material-ui/Grid';
import withStyles from 'material-ui/styles/withStyles';

import { services } from './content';
import ServCard from './servCard';

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

const Services = ({ classes }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={11}>
      <Grid container justify="center">
        {services.map(s => (
          <Grid item xs={11} md={6} lg={4} key={s.sub}>
            <ServCard {...s} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default Styled(Services);
