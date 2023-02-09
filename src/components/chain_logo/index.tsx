import React from 'react';
// import light from '@assets/WM_Logo.svg?url';
import dark from '@assets/WM_Logo.svg?url';
import classnames from 'classnames';
import { useStyles } from '../chain_icon/useStyles';

const Logo = ({
  className, src, ...props
}: JSX.IntrinsicElements['img']) => {
  const classes = useStyles();
  return (
    <>
      {/* <img src={light} alt="" {...props} className={classnames(className, classes.light)} /> */}
      <img src={dark} alt="" {...props} className={classnames(className, classes.dark)} />
    </>
  );
};

export default Logo;
