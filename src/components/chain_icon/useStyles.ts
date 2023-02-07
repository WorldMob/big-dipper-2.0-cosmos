import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(styles => ({
  light: {
    '.mode-dark &': {
      display: 'none',
    },
  },
  dark: {
    display: 'none',
    '.mode-dark &': {
      display: 'initial',
    },
  },
}));
