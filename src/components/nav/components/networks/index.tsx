import React from 'react';
import { Typography } from '@material-ui/core';
// import { useRecoilValue } from 'recoil';
// import { readNetworks } from '@recoil/big_dipper_networks';
import WMLogo from '@assets/WM_Logo.svg?url';
import { useStyles } from './styles';
import { SingleNetwork } from './components';

const Networks: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={className}>

      <div className={classes.networkList}>
        <img src={WMLogo} alt="logo" />
        <div className="network">
          <Typography variant="h4">
            World Mobile
          </Typography>
          <SingleNetwork
            className="mainnet"
            key="aya_preview_001"
            url={null}
            name="Mainnet"
            chainId="Coming Soon"
          />
          <SingleNetwork
            className="testnet"
            key="aya_preview_001"
            url={null}
            name="Testnet"
            chainId="aya_preview_001"
          />
        </div>
      </div>

    </div>
  );
};

export default Networks;
