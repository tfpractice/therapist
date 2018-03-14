import React from 'react';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, { CardMedia, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { diversity } from './content';

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  item: { listStyle: 'none' },

  card: { backgroundColor: theme.cardBack },
});
const Styled = withStyles(styles);

const Diversity = ({ classes }) => (
  <Fade in>
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12}>
        <GridListTile className={classes.item}>
          <CardMedia className={classes.image} image="/images/tree.jpg" />

          <GridListTileBar
            titlePosition="bottom"
            title={
              <Text type="headline" align="center">
                Diversity, Multiculturalism, & Inclusion in the Workplace
              </Text>
            }
          />
        </GridListTile>
      </Grid>
      <Grid item xs={11}>
        <CardContent>
          <Card className={classes.card}>
            <Text type="headline" component={CardContent} color="textSecondary">
              <MarkdownPreview value={diversity} {...mkOpts} />
            </Text>
          </Card>
        </CardContent>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(Diversity);
