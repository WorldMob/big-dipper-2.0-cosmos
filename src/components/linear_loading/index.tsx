import React from 'react';
import classnames from 'classnames';
import { LinearProgress } from '@mui/material';
import { useStyles } from './styles';

const LinearLoading: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <LinearProgress />
    </div>
  );
};

export default LinearLoading;
