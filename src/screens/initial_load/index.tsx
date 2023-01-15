/* eslint-disable @typescript-eslint/no-unused-vars */
import WMLogotxtpurplev2 from '@assets/WM_Logo_txt_purple_v2.svg';
import WMLogotxtwhitev2 from '@assets/WM_Logo_txt_white_v2.svg';
import { ChainLogo } from '@components';
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
      <div>
        <ChainLogo className={classes.logo} alt="logo" />
        <LinearProgress className={classes.divider} />
        {theme === 'light' ? (
          <WMLogotxtpurplev2 />
        ) : (
          <WMLogotxtwhitev2 />
        )}
      </div>
    </div>
  );
};

export default InitialLoad;
