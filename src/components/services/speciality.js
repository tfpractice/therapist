import React from 'react';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { Expand } from '../misc';
import { mkOpts } from '../../utils';
import { diversity } from './content';

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  card: { backgroundColor: theme.cardBack },
});
const Styled = withStyles(styles);

const Diversity = ({ classes }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={12}>
      <Expand
        header={
          <GridListTile>
            <CardMedia className={classes.image} image="/images/tree.jpg" />

            <GridListTileBar
              titlePosition="top"
              title={
                <Text type="headline" align="center">
                  Diversity, Multiculturalism, & Inclusion in the Workplace
                </Text>
              }
            />
          </GridListTile>
        }>
        <CardContent>
          <Card className={classes.card}>
            <Text type="headline" component={CardContent} color="secondary">
              <MarkdownPreview value={diversity} {...mkOpts} />
            </Text>
          </Card>
        </CardContent>
      </Expand>
    </Grid>
    <Grid item xs={11} />
  </Grid>
);

export default Styled(Diversity);
