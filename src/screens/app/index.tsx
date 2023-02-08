import React from 'react';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@src/graphql/client';
import { chainConfig } from '@configs';
import { useWindowOrigin } from '@hooks';

import {
  useApp,
} from './hooks';
import {
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
} from './utils';
import { Theme } from "@mui/material/styles";
import "@mui/styles";
import { Main } from './components';

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
  interface DefaultTheme extends Theme {}
}

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App(props: AppProps) {
  useApp();
  const { pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { t } = useTranslation();
  const { location } = useWindowOrigin();

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${chainConfig.title}`}
        title={t('common:worldMobile')}
        description={t('common:description')}
        openGraph={{
          title: `${t('common:worldMobile')} | ${chainConfig.title}`,
          description: t('common:description'),
          url: location,
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ApolloProvider
        client={apolloClient}
      >
        <RecoilRoot>
          <Main {...props} />
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default App;
