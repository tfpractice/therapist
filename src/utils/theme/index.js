import { createMuiTheme } from 'material-ui/styles/';
import { blueGrey, grey } from 'material-ui/colors';
import { white } from 'material-ui/colors/common';

const primary = blueGrey;
const accent = white;
const secondary = grey;
const type = 'dark';

const palette = {
  primary,
  secondary,
  accent,
  type,
};

const cardBack = 'rgba(48,48,48,0.8)';

const theme = createMuiTheme({ palette, cardBack });

export default theme;
