import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import withStyles from 'material-ui/styles/withStyles';
import Avatar from 'material-ui/Avatar';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

import { mkOpts } from '../../utils';
import { sartre, mission } from './home';
import {
  getPublications,
  mConnect as connect,
} from '../../utils/medium/connect';
import { url, myClient, config } from '../../utils/medium/creds';

const styles = theme => ({
  home: { paddingTop: '2rem' },
  bar: { backgroundColor: '#607d8bdd' },

  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
  },
  item: { listStyle: 'none' },

  media: {
    backgroundColor: 'transparent',
    height: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    // '&:hover': { backgroundSize: 'cover' },
  },
  card: { backgroundColor: 'rgba(48,48,48,0.8)' },
});

const sheet = { name: 'About' };

const Styled = withStyles(styles, sheet);

const Home = ({ classes, ...props }) => {
  console.log('props', props);
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.home}>
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
                  color="textSecondary">
                  <MarkdownPreview value={sartre} {...mkOpts} />
                </Text>
              }
            />
          </GridListTile>

          <CardContent>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Button onClick={connect}>connect</Button>
                <Text
                  component={CardContent}
                  variant="subheading"
                  color="textSecondary">
                  <MarkdownPreview value={mission} {...mkOpts} />
                </Text>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Styled(Home);
