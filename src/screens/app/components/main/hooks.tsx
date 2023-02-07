import { useState } from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';
import { createMuiTheme } from '@mui/material/styles';
import {
  readTheme,
  getThemeTemplate,
} from '@recoil/settings';
import { chainConfig } from '@configs';
import dayjs from '@utils/dayjs';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createMuiTheme(adaptV4Theme(getThemeTemplate(theme))),
  };
};

export const useGenesis = () => {
  const utcTimeNow = dayjs.utc().format('YYYY-MM-DDTHH:mm:ss');
  const [genesisStarted, setGenesis] = useState(chainConfig.genesis.time < utcTimeNow);

  const startGenesis = () => {
    setTimeout(() => {
      setGenesis(true);
    }, 10000);
  };

  return {
    genesisStarted,
    startGenesis,
  };
};
