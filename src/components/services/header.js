import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
} from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

import Tabs from './tabs';
import { mkOpts } from '../../utils';
import { services } from './content';
import ServCard from './servCard';
import Spirituality from './spirituality';
import Diversity from './diversity';
import Menu from './menu';
import Speciality from './speciality';

const images = [ '/images/lily.jpg', '/images/bigSky.jpg', '/images/tree.jpg' ];

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

const Services = ({ classes, index, ...props }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={12}>
      <GridListTile className={classes.item}>
        <CardMedia className={classes.image} image={images[index]} />

        <GridListTileBar
          titlePosition="bottom"
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
