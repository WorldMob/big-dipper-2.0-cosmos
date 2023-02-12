/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChainLogo, PaddyLogo } from '@components';
import { LinearProgress } from '@material-ui/core';
import { readTheme } from '@recoil/settings';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useStyles } from './styles';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <h1>World Mobile Explorer</h1>
      <ChainLogo className={classes.logo} alt="logo" />
      <PaddyLogo className={classes.logo} alt="logo" />
      <LinearProgress className={classes.divider} />
      <h3>Maintained By Paddy</h3>

    </div>
  );
};

export default InitialLoad;
