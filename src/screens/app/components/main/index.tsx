import React, { useEffect } from 'react';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import Countdown from '@screens/countdown';
import InitialLoad from '@screens/initial_load';
import { useSettingsRecoil } from '@recoil/settings';
import { useBigDipperNetworksRecoil } from '@recoil/big_dipper_networks';
import { useMarketRecoil } from '@recoil/market';
import { useValidatorRecoil } from '@recoil/validators';
import { InnerApp } from '..';
import {
  useTheme,
  useGenesis,
} from './hooks';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const Main = (props: AppProps) => {
  // =====================================
  // init recoil values
  // =====================================
  useSettingsRecoil();
  useBigDipperNetworksRecoil();
  useMarketRecoil();
  const { loading } = useValidatorRecoil();

  // =====================================
  // general setup
  // =====================================
  const { muiTheme } = useTheme();
  const {
    genesisStarted,
    startGenesis,
  } = useGenesis();

  let Component = null;

  if (!genesisStarted) {
    Component = (
      <Countdown startGenesis={startGenesis} />
    );
  } else if (loading) {
    Component = <InitialLoad {...props.pageProps} />;
  } else {
    Component = (
      <InnerApp {...props} />
    );
  }

  /* Adding a class to the document element to indicate the dark mode. */
  useEffect(() => {
    if (typeof document !== 'undefined' && document?.documentElement) {
      document.documentElement.classList.toggle('mode-dark', muiTheme.palette.mode === 'dark');
    }
  }, [muiTheme.palette.mode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          hideProgressBar
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {Component}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Main;
