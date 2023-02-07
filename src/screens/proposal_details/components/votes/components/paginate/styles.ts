import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginTop: theme.spacing(3),
        },
      });
    },
  )();

  return styles;
};
