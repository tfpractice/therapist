import React from 'react';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';
import { withStyles } from 'material-ui/styles';

import { articles } from './content';
import BlogCard from './link';

const styles = theme => ({
  bNav: { backgroundColor: theme.palette.primary },
  btn: { backgroundColor: theme.palette.accent },
  grid: { backgroundColor: 'rgba(0,150,136, 0.17)' },
});

const Styled = withStyles(styles);

const BlogView = () => (
  <Fade in>
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
  </Fade>
);

export default Styled(BlogView);
