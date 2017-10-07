import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import Blog from '../blog';
import { bio, quote } from './about';

const styles = (theme) => {
  console.log('theme', theme);
  return {
    image: { maxWidth: '90%' },
    card: { backgroundColor: theme.cardBack },
  };
};
const sheet = { name: 'About' };
const Styled = withStyles(styles, sheet);

const About = ({ classes }) => (
  <Fade in>
    <Grid container justify="center" align="center">
      <Grid item xs={11}>
        <Card className={classes.card}>
          <CardHeader
            subheader={
              <Text type="headline">
                <MarkdownPreview value={quote} {...mkOpts} />
              </Text>
            }
          />
          <CardContent>
            <Grid container justify="center" align="center" spacing={8}>
              <Grid item xs={11} sm={4}>
                <img className={classes.image} src="/images/headshot.jpg" />
              </Grid>
              <Grid item xs={11} sm>
                <Text type="headline" component={CardContent} color="secondary">
                  <MarkdownPreview value={bio} {...mkOpts} />
                </Text>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(About);
