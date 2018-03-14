import React from 'react';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

import { mkOpts } from '../../utils';
import { Expand } from '../misc';
import { diversity } from './content';

const styles = theme => ({ card: { backgroundColor: theme.cardBack }});
const Styled = withStyles(styles);

const ServCard = ({ sub, time, content, classes }) => (
  <Expand header={<CardHeader title={`${sub} | ${time} min.`} />}>
    <Text type="headline" component={CardContent} color="textSecondary">
      <MarkdownPreview value={content} {...mkOpts} />
    </Text>
  </Expand>
);

export default Styled(ServCard);
