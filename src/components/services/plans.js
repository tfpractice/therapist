import Grid from 'material-ui/Grid';
import React from 'react';
import withStyles from 'material-ui/styles/withStyles';

import ServCard from './servCard';
import { services } from './content';

const styles = theme => ({
  image: {
    height: `20rem`,
    maxHeight: `20rem`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  },
  item: { listStyle: `none` },

  card: { backgroundColor: theme.cardBack },
});

const Styled = withStyles(styles);

const Services = ({ classes }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={11}>
      <Grid container justify="center" spacing={40}>
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
