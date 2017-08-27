import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { address, quote, email } from './content';

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

const Contact = ({ classes }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={9}>
      <Card className={classes.card}>
        <CardHeader title={quote} subheader="― Shannon L. Alder" />
        <CardMedia className={classes.image} image="/images/stream.jpg" />

        <CardHeader title={address} subheader={email} />
      </Card>
    </Grid>
  </Grid>);

export default Styled(Contact);
