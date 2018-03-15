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

const Services = ({ classes, index, ...props }) => {
  console.log('props', props);
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12}>
        <GridListTile className={classes.item}>
          <CardMedia className={classes.image} image="/images/lily.jpg" />

          <GridListTileBar
            titlePosition="bottom"
            title={
              <Grid container justify="center" alignContent="center">
                <Grid item xs={12}>
                  <Tabs index={index} onChange={props.changeHandler} />
                </Grid>
              </Grid>
            }
          />
        </GridListTile>
      </Grid>
    </Grid>
  );
};

export default Styled(Services);
