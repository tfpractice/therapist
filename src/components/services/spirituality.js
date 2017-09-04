import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Avatar from 'material-ui/Avatar';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { spirituality, churchHurt } from './content';

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  container: {
    backgroundImage: `url('/images/bigSky.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  card: { backgroundColor: 'rgba(48,48,48,0.8)' },
});
const sheet = { name: 'About' };
const Styled = withStyles(styles);

const Spirituality = ({ classes }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={12}>
      <GridListTile className={classes.item}>
        <CardMedia className={classes.image} image="/images/bigSky.jpg" />

        <GridListTileBar
          titlePosition="top"
          title={
            <Text type="headline" align="center">
              Spirituality
            </Text>
          }
        />
      </GridListTile>
    </Grid>
    <Grid item xs={11}>
      <CardContent>
        <Grid container justify="center">
          <Grid item sm={12} md={6}>
            <Card className={classes.card}>
              <Text type="headline" component={CardContent} color="secondary">
                <MarkdownPreview value={spirituality} {...mkOpts} />
              </Text>
            </Card>
          </Grid>

          <Grid item sm={12} md={6}>
            <Card className={classes.card}>
              <Text
                type="headline"
                component={CardContent}
                align="justify"
                color="secondary"
              >
                <MarkdownPreview value={churchHurt} {...mkOpts} />
              </Text>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Grid>
  </Grid>);

export default Styled(Spirituality);
