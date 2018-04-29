import Avatar from 'material-ui/Avatar';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import Fade from 'material-ui/transitions/Fade';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { MarkdownPreview } from 'react-marked-markdown';

import { mission, sartre } from './home';
import { mkOpts } from '../../utils';

const styles = theme => ({
  home: { paddingTop: `2rem` },
  bar: { backgroundColor: `#607d8bdd` },

  image: {
    height: `20rem`,
    maxHeight: `20rem`,
    backgroundPosition: `center`,
  },
  item: { listStyle: `none` },

  media: {
    backgroundColor: `transparent`,
    height: `20rem`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,

    // '&:hover': { backgroundSize: 'cover' },
  },
  card: { backgroundColor: `rgba(48,48,48,0.8)` },
});

const sheet = { name: `About` };

const Styled = withStyles(styles, sheet);

const Home = ({ classes }) => (
  <Grid
    container
    justify="center"
    alignContent="center"
    className={classes.home}
  >
    <Grid item xs={11}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src="/images/headshot.jpg" />}
          title="Natasha L. Edwards, MA, LMHC, NCC"
          subheader="M.A. Applied Psychology, M.A. Womens & Gender Studies"
        />
        <GridListTile className={classes.item}>
          <CardMedia
            className={classes.media}
            image="/images/cityscape.png"
            alt="samaple"
          />

          <GridListTileBar
            title={
              <Text
                align="center"
                component={CardContent}
                variant="title"
                color="textSecondary"
              >
                <MarkdownPreview value={sartre} {...mkOpts} />
              </Text>
            }
          />
        </GridListTile>

        <CardContent>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Text
                component={CardContent}
                variant="subheading"
                color="textSecondary"
              >
                <MarkdownPreview value={mission} {...mkOpts} />
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Styled(Home);
