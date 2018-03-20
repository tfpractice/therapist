import React from 'react';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { getPublications, getMe } from '../../utils/medium';
import { articles } from './content';
import BlogCard from './link';

const styles = theme => ({
  blog: { paddingTop: '2rem' },
  bNav: { backgroundColor: theme.palette.primary },
  btn: { backgroundColor: theme.palette.accent },
  grid: { backgroundColor: 'rgba(0,150,136, 0.17)' },
});

const Styled = withStyles(styles);

const BlogView = ({ classes }) => (
  <Fade in className={classes.blog}>
    <Grid container justify="center" spacing={24}>
      <Grid item xs={11}>
        <Button onClick={getMe}>getPublications</Button>
        <Grid container justify="center" spacing={24}>
          {articles.map((prod, i) => (
            <Grid item xs={6} md={3} key={i}>
              <BlogCard article={prod} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(BlogView);
