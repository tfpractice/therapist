import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Swipable from 'react-swipeable-views';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { address, quote, email } from './content';
import Map from './map';

const styles = (theme) => {
  console.log('theme', theme);
  return {
    image: {
      height: '20rem',
      maxHeight: '20rem',
      backgroundPosition: 'center',
    },
    card: { backgroundColor: theme.cardBack },
  };
};
const sheet = { name: 'Contact' };
const Styled = withStyles(styles, sheet);

const Contact = ({ classes }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={9}>
      <Card className={classes.card}>
        <CardHeader title={quote} subheader="― Shannon L. Alder" />
        <Grid container justify="center" align="center">
          <Grid item xs={12}>
            <Swipable disabled index={0} ignoreNativeScroll>
              <Map />
            </Swipable>
          </Grid>
        </Grid>

        <CardHeader title={email} />
      </Card>
    </Grid>
  </Grid>
);

export default Styled(Contact);
