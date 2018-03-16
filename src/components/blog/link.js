import React from 'react';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Heart from 'material-ui-icons/Favorite';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

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

const BlogCard = ({ classes }) => (
  <Card className={classes.card}>
    <CardHeader
      avatar={
        <Link to="/">
          <Avatar src="/images/headshot.jpg" />
        </Link>
      }
      subheader="sample blog post"
    />
    <CardContent>
      <GridListTile className={classes.item}>
        <Link to="/">
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
              <Heart color="action" />
            </IconButton>
          }
        />
      </GridListTile>
    </CardContent>
  </Card>
);

export default Styled(BlogCard);
