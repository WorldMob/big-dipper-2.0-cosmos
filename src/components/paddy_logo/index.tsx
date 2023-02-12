import React from 'react';
import Paddy from '@assets/paddy_black.png';
import classnames from 'classnames';
import { useStyles } from '../chain_icon/useStyles';

const PaddyLogo = ({
  className, src, ...props
}: JSX.IntrinsicElements['img']) => {
  const classes = useStyles();
  return (
    <>
      {/* <img src={light} alt="" {...props} className={classnames(className, classes.light)} /> */}
      <img src={Paddy.src} alt="" {...props} className={classnames(className, classes.dark)} />
    </>
  );
};

export default PaddyLogo;
