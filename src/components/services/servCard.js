import React from 'react';
import Text from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import { CardContent, CardHeader } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';

import { Expand } from '../misc';
import { mkOpts } from '../../utils';

const styles = theme => ({ card: { backgroundColor: theme.cardBack }});

const Styled = withStyles(styles);

const ServCard = ({ sub, time, content, classes }) => (
  <Expand header={<CardHeader title={`${sub} `} subheader={`${time} min.`} />}>
    <Text type="headline" component={CardContent} color="textSecondary">
      <MarkdownPreview value={content} {...mkOpts} />
    </Text>
  </Expand>
);

export default Styled(ServCard);
