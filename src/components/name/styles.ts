import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          color: theme.palette.custom.fonts.highlight,
          wordBreak: 'break-all',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      });
    },
  )();

  return styles;
};
