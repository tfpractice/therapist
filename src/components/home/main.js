import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import withStyles from 'material-ui/styles/withStyles';
import Avatar from 'material-ui/Avatar';

import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { sartre, mainQuote, mission } from './home';

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
  },
  media: {
    backgroundColor: '#fff',
    height: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': { backgroundSize: 'auto' },
  },
  card: { backgroundColor: 'rgba(48,48,48,0.8)' },
});
const sheet = { name: 'About' };
const Styled = withStyles(styles, sheet);

const Home = ({ classes }) => (
  <Grid container justify="center" align="center">
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
                type="headline"
                align="center"
                component={CardContent}
                color="secondary"
              >
                <MarkdownPreview value={sartre} {...mkOpts} />
              </Text>
            }
          />
        </GridListTile>

        <CardContent>
          <Grid container justify="center">
            <Grid item xs={9}>
              <Text type="headline" component={CardContent} color="secondary">
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
