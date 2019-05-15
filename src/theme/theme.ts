const spacerUnit = 8;
// @ts-ignore
const multipliers = [...Array(30).keys()].map((num: number) => 1 + num);

const getRemSize = (value: number) => value / 16;

const spacerValues = {
  ...multipliers.reduce(
    (acc, mult) => ({ ...acc, [mult]: `${getRemSize(spacerUnit * mult)}rem` }),
    {},
  ),
  auto: 'auto',
};

const theme = {
  border: {
    width: '1px',
    style: 'solid',
    color: '#d4d4d4',
  },
  spacing: {
    unit: spacerUnit,
    values: spacerValues,
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 0.875,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 900,
    display4: {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      color: '',
    },
    display3: {},
    display2: {},
    display1: {},
    headline: {},
    title: {},
    subheading: {},
    body2: {},
    body1: {},
    caption: {},
  },
};

export default theme;
