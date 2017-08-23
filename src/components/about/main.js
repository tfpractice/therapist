import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { bio, quote } from './about';

const styles = theme => ({ image: { maxWidth: '90%' }});
const Styled = withStyles(styles);
const About = ({ classes }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={9}>
      <Card>
        <CardContent>
          <Text color="secondary">
            <MarkdownPreview value={quote} {...mkOpts} />
          </Text>
        </CardContent>
        <CardContent>
          <Grid container justify="center" align="center">
            <Grid item xs={6} sm={4}>
              <img className={classes.image} src="/images/headshot.jpg" />
            </Grid>
            <Grid item xs={6} sm>
              <Text color="secondary">
                <MarkdownPreview value={bio} {...mkOpts} />
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>}
  </Grid>);

export default Styled(About);
