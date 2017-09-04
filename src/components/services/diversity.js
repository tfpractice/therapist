import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { diversity } from './content';

const styles = (theme) => {
  console.log('theme', theme);
  return {
    image: {
      height: '20rem',
      maxHeight: '20rem',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    card: { backgroundColor: theme.cardBack },
  };
};
const sheet = { name: 'About' };
const Styled = withStyles(styles, sheet);

const Diversity = ({ classes }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={9}>
      <Card className={classes.card}>
        <GridListTile className={classes.item}>
          <CardMedia className={classes.image} image="/images/tree.jpg" />

          <GridListTileBar title="Diversity, Multiculturalism, & Inclusion in the Workplace" />
        </GridListTile>
        <CardContent>
          <Grid container justify="center" align="center" spacing={8}>
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
