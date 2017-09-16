import React from 'react';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Text from 'material-ui/Typography';
import Heart from 'material-ui-icons/Favorite';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton as NavBtn,
} from 'material-ui/BottomNavigation';
import { CardActions } from 'material-ui/Card';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import { articles } from './content';
import BlogCard from './link';

const styles = theme => ({
  bNav: { backgroundColor: theme.palette.primary[500] },
  btn: { backgroundColor: theme.palette.accent[500] },
  grid: { backgroundColor: 'rgba(0,150,136, 0.17)' },
});
const Styled = withStyles(styles);

const BlogView = () => (
  <Grid container justify="center" spacing={24}>
    <Grid item xs={12}>
      Blog
    </Grid>
    <Grid item xs={11}>
      <Grid container justify="center" spacing={24}>
        {articles.map((prod, i) => (
          <Grid item xs={6} md={3} key={i}>
            <BlogCard article={prod} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default Styled(BlogView);
