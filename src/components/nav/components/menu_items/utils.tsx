import BlockIcon from '@assets/icon-block.svg';
import HomeIcon from '@assets/icon-home.svg';
import TransactionIcon from '@assets/icon-transaction.svg';
import ProposalsIcon from '@assets/icon-proposals.svg';
import UserIcon from '@assets/icon-user.svg';
import LanguageIcon from '@assets/icon-language.svg';
import ParamIcon from '@assets/icon-param.svg';
import {
  HOME,
  BLOCKS,
  VALIDATORS,
  TRANSACTIONS,
  PROPOSALS,
  PARAMS,
} from '@utils/go_to_page';
import { TwitterIcon } from '@src/components/icons';

export const getMenuItems = () => {
  const iconProps = {
    width: 24,
    height: 24,
  };

  return [
    {
      key: 'overview',
      url: HOME,
      icon: <HomeIcon {...iconProps} />,
    },
    {
      key: 'blocks',
      url: BLOCKS,
      icon: <BlockIcon {...iconProps} />,
    },
    {
      key: 'validators',
      url: VALIDATORS,
      icon: <UserIcon {...iconProps} />,
    },
    {
      key: 'transactions',
      url: TRANSACTIONS,
      icon: <TransactionIcon {...iconProps} />,
    },
    {
      key: 'proposals',
      url: PROPOSALS,
      icon: <ProposalsIcon {...iconProps} />,
    },
    {
      key: 'params',
      url: PARAMS,
      icon: <ParamIcon {...iconProps} />,
    },
    // {
    //   key: 'Useful Links',
    //   url: LINKS,
    //   icon: <WebsiteIcon {...iconProps} />,
    // },
    {
      key: 'Follow Us',
      url: 'https://twitter.com/WorldMExplorer',
      icon: <TwitterIcon />,
    },
    {
      key: 'Documentation',
      url: 'https://nodebasewm.github.io/docs/',
      icon: <LanguageIcon {...iconProps} />,
    },
  ];
};
