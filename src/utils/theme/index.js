import createPalette from 'material-ui/styles/palette';
import { createMuiTheme } from 'material-ui/styles/';
import cyan from 'material-ui/colors/cyan';
import grey from 'material-ui/colors/grey';

const palette = createPalette({ primary: cyan, accent: grey, type: 'light' });

const theme = createMuiTheme({ palette });

export default theme;
