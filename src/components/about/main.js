import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { bio, quote } from './about';

const sheet = { name: 'About' };
const styles = theme => ({ image: { maxWidth: '90%' }});
const Styled = withStyles(styles, sheet);

const About = ({ classes }) => {
  console.log('classes', classes);
  return (
    <Grid container justify="center" align="center">
      <Grid item xs={9}>
        <Card>
          <CardHeader
            subheader={<MarkdownPreview value={quote} {...mkOpts} />}
          />
          <CardContent>
            <Grid container justify="center" align="center">
              <Grid item xs={11} sm={4}>
                <img className={classes.image} src="/images/headshot.jpg" />
              </Grid>
              <Grid item xs={11} sm>
                <Text component={CardContent} color="secondary">
                  <MarkdownPreview value={bio} {...mkOpts} />
                </Text>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>}
    </Grid>
  );
};

export default Styled(About);
