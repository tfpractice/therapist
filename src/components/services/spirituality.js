import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { spirituality, churchHurt } from './content';

const styles = theme => ({
  image: {
    height: '20rem',
    maxHeight: '20rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  item: { listStyle: 'none' },

  container: {
    backgroundImage: `url('/images/bigSky.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  card: { backgroundColor: 'rgba(48,48,48,0.8)' },
});

const Styled = withStyles(styles);

const Spirituality = ({ classes }) => (
  <Fade in>
    <Grid container justify="center" alignContent="center">
      <Grid item xs={11}>
        <CardContent>
          <Grid container justify="center">
            <Grid item sm={12} md={6}>
              <Card className={classes.card}>
                <Text
                  type="headline"
                  component={CardContent}
                  color="textSecondary">
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
                  color="textSecondary">
                  <MarkdownPreview value={churchHurt} {...mkOpts} />
                </Text>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  </Fade>
);

export default Styled(Spirituality);
