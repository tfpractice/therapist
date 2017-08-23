import createPalette from 'material-ui/styles/palette';
import { createMuiTheme } from 'material-ui/styles/';
import teal from 'material-ui/colors/teal';
import grey from 'material-ui/colors/grey';

const palette = createPalette({ primary: grey, accent: teal, type: 'light' });

const theme = createMuiTheme({ palette });

export default theme;
