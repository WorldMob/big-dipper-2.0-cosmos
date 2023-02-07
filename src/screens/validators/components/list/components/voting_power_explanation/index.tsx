import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@mui/material';
import { useStyles } from './styles';

const VotingPowerExplanation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Trans
          i18nKey="validators:votingPowerExplanation"
          components={[
            <b />,
          ]}
        />
      </Typography>
    </div>
  );
};

export default VotingPowerExplanation;
