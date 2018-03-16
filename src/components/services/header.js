import React from 'react';
import Grid from 'material-ui/Grid';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import withStyles from 'material-ui/styles/withStyles';
import Card, {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
} from 'material-ui/Card';

import Tabs from './tabs';

const images = [ '/images/lily.jpg', '/images/tree.jpg', '/images/bigSky.jpg' ];

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  bar: { paddingBottom: '0.5rem', backgroundColor: '#607d8bdd' },

  item: { listStyle: 'none' },
  card: { backgroundColor: theme.cardBack },
});

const Styled = withStyles(styles);

const Services = ({ classes, index, ...props }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={12}>
      <GridListTile className={classes.item}>
        <CardMedia className={classes.image} image={images[index]} />

        <GridListTileBar
          titlePosition="bottom"
          className={classes.bar}
          title={
            <Grid container justify="center" alignContent="center">
              <Tabs index={index} set={props.set} onChange={props.onChange} />
            </Grid>
          }
        />
      </GridListTile>
    </Grid>
  </Grid>
);

export default Styled(Services);
