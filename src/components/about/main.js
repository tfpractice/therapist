import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { bio, quote } from './about';

const styles = (theme) => {
  console.log('theme', theme);
  return {
    about: { paddingTop: '2rem' },
    image: { maxWidth: '90%' },
    card: { backgroundColor: theme.cardBack },
  };
};

const sheet = { name: 'About' };

const Styled = withStyles(styles, sheet);

const About = ({ classes }) => (
  <Fade in timeout={500}>
    <Grid
      container
      className={classes.about}
      justify="center"
      alignContent="center"
      alignItems="center">
      <Grid item xs={11}>
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              spacing={8}
              alignItems="center">
              <Grid item xs={11} sm={4}>
                <img className={classes.image} src="/images/headshot.jpg" />
              </Grid>
              <Grid item xs={12} sm>
                {/* <CardHeader
                  subheader={<MarkdownPreview value={quote} {...mkOpts} />}
                /> */}
                <Text
                  component={CardContent}
                  variant="subheading"
                  color="textSecondary">
                  <MarkdownPreview value={bio} {...mkOpts} />
                </Text>
                <CardHeader
                  subheader={<MarkdownPreview value={quote} {...mkOpts} />}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(About);
