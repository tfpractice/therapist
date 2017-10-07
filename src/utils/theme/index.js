import { createMuiTheme } from 'material-ui/styles/';
import { cyan, blueGrey, grey } from 'material-ui/colors';

const primary = blueGrey;
const accent = grey;
const type = 'dark';

const palette = {
  primary,
  accent,
  type,
};

const cardBack = 'rgba(48,48,48,0.8)';

const theme = createMuiTheme({ palette, cardBack });

export default theme;
