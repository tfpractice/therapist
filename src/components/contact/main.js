import Button from 'material-ui/Button';
import Card, {CardActions, CardHeader} from 'material-ui/Card';
import Fade from 'material-ui/transitions/Fade';
import Grid from 'material-ui/Grid';
import React from 'react';
import Swipable from 'react-swipeable-views';
import withStyles from 'material-ui/styles/withStyles';

import Map from './map';
import {email, quote} from './content';

const styles = theme => ({
  header: {marginTop: `2rem`},

  image: {
    height: `20rem`,
    maxHeight: `20rem`,
    backgroundPosition: `center`,
  },
  card: {backgroundColor: theme.cardBack},
});

const sheet = {name: `Contact`};

const Styled = withStyles(styles, sheet);

const Contact = ({classes}) => (
  <Fade in>
    <Grid container justify="center" alignContent="center">
      <Grid item xs={9} className={classes.header}>
        <Card className={classes.card}>
          <CardHeader title={quote} subheader="― Shannon L. Alder" />
          <Grid container justify="center" alignContent="center">
            <Grid item xs={12}>
              <Swipable disabled index={0} ignoreNativeScroll>
                <Map />
              </Swipable>
            </Grid>
          </Grid>

          <CardActions>
            <Button href={`mailto:${email}`}>{email}</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(Contact);
