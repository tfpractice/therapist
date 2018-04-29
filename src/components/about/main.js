import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Fade from 'material-ui/transitions/Fade';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import { MarkdownPreview } from 'react-marked-markdown';

import { bio, quote } from './about';
import { mkOpts } from '../../utils';

const styles = theme => {
  console.log(`theme`, theme);
  return {
    about: { paddingTop: `2rem` },
    image: { maxWidth: `90%` },
    card: { backgroundColor: theme.cardBack },
  };
};

const sheet = { name: `About` };

const Styled = withStyles(styles, sheet);

const About = ({ classes }) => (
  <Fade in timeout={500}>
    <Grid
      container
      className={classes.about}
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item xs={11}>
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              spacing={8}
              alignItems="center"
            >
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
                  color="textSecondary"
                >
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
