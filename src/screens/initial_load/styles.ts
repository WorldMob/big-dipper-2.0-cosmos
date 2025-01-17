import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: theme.spacing(6),
          '& svg': {
            width: '100%',
          },
          [theme.breakpoints.up('sm')]: {
            '& svg': {
              width: '300px',
            },
          },
        },
        logo: {
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '150px',
          },
        },
        divider: {
          margin: theme.spacing(2, 0),
          width: theme.spacing(30),
        },
      });
    },
  )();

  return styles;
};
