import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { diversity } from './content';

const styles = (theme) => {
  console.log('theme', theme);
  return {
    image: { maxWidth: '90%' },
    card: { backgroundColor: theme.cardBack },
  };
};
const sheet = { name: 'About' };
const Styled = withStyles(styles, sheet);

const Diversity = ({ classes }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={9}>
      <Card className={classes.card}>
        <CardHeader title="Diversity, Multiculturalism, & Inclusion in the Workplace" />
        <CardContent>
          <Grid container justify="center" align="center" spacing={8}>
            <Grid item xs={11} sm={4}>
              <img className={classes.image} src="/images/headshot.jpg" />
            </Grid>
            <Grid item xs={11} sm>
              <Text component={CardContent} color="secondary">
                <MarkdownPreview value={diversity} {...mkOpts} />
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>);

export default Styled(Diversity);
