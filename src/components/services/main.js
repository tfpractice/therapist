import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Swipable from 'react-swipeable-views';
import Card, {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
} from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

import Tabs from './tabs';
import { withIndex } from '../wrappers';
import { mkOpts } from '../../utils';
import { services } from './content';
import ServCard from './servCard';
import Spirituality from './spirituality';
import Diversity from './diversity';
import Menu from './menu';
import Speciality from './speciality';
import Header from './header';
import Plans from './plans';

{
  /* <CardActions className={classes.actions} disableActionSpacing>
  <IconButton aria-label="Add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="Share">
    <ShareIcon />
  </IconButton>
  <IconButton
    className={classnames(classes.expand, {
      [classes.expandOpen]: this.state.expanded,
    })}
    onClick={this.handleExpandClick}
    aria-expanded={this.state.expanded}
    aria-label="Show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions> */
}
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

const Services = ({ classes, index, set, changeSet, ...props }) => (
  <Fade in>
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12}>
        <Header index={index} set={set} onChange={changeSet} />
      </Grid>
      <Grid item xs={11}>
        <Swipable onChangeIndex={changeSet} index={index}>
          <Plans />
          <Spirituality />
          <Diversity />
        </Swipable>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(withIndex(Services));
