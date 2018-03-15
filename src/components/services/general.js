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

const Services = ({ classes }) => (
  <Fade in>
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12}>
        <GridListTile className={classes.item}>
          <CardMedia className={classes.image} image="/images/lily.jpg" />

          <GridListTileBar
            titlePosition="bottom"
            title={
              <Grid container justify="center" alignContent="center">
                <Grid item xs={12}>
                  <Tabs />{' '}
                </Grid>
              </Grid>
            }

            // actionIcon={<Menu />}
          />
        </GridListTile>
      </Grid>
      <Grid item xs={11}>
        <Grid container justify="center" spacing={40}>
          {services.map(s => (
            <Grid item xs={11} md={6} lg={4} key={s.sub}>
              <ServCard {...s} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(Services);
