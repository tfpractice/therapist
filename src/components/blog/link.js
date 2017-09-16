import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Heart from 'material-ui-icons/Favorite';
import XHeart from 'material-ui-icons/HighlightOff';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

import { content } from './content';

// const mapState = ({ favorites }, { product }) => ({ isFav: new Set(favorites).has(product.id) });
// const Connected = connect(mapState, Favorites.actions);

const styles = theme => ({
  item: { listStyle: 'none' },
  card: {
    height: '100%',
    maxHeight: '100%',
    backgroundColor: 'rgba(66,66,66,0.8)',
  },
  media: {
    backgroundColor: '#fff',
    height: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': { backgroundSize: 'contain' },
  },
});
const Styled = withStyles(styles);

const BlogCard = ({ classes, article }) => (
  <Card className={classes.card}>
    <CardHeader
      avatar={
        <Link to={`/`}>
          <Avatar src="/images/headshot.jpg" />
        </Link>
      }
      subheader="sample blog post"
    />
    <CardContent>
      <GridListTile className={classes.item}>
        <Link to={`/}`}>
          <CardMedia
            className={classes.media}
            image="/images/headshot.jpg"
            alt="samaple"
          />
        </Link>

        <GridListTileBar
          title={<Text>Smaple title</Text>}
          actionIcon={
            <IconButton>
              <Heart color="rgba(255, 0, 255, 0.7)" />
            </IconButton>
          }
        />
      </GridListTile>
    </CardContent>
  </Card>
);

export default Styled(BlogCard);
