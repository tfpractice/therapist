import { createMuiTheme } from 'material-ui/styles/';
import cyan from 'material-ui/colors/cyan';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/grey';

const primary = blueGrey;
const accent = cyan;
const type = 'dark';

const palette = { primary, accent, type };

const cardBack = 'rgba(48,48,48,0.8)';

const theme = createMuiTheme({ palette, cardBack });

export default theme;
