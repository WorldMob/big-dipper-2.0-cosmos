import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import {
  usePagination, useScreenSize,
} from '@hooks';
import {
  Pagination, NoData,
} from '@components';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import { UnbondingType } from '../../../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Unbondings: React.FC<{
  className?: string;
  data: UnbondingType[],
  count: number;
}> = ({
  className,
  data,
  count,
}) => {
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});
  const { isDesktop } = useScreenSize();
  const dataProfiles = useProfilesRecoil(data.map((x) => x.validator));
  const mergedDataWithProfiles = data.map((x, i) => {
    return ({
      ...x,
      validator: dataProfiles[i],
    });
  });

  const items = sliceItems(mergedDataWithProfiles);

  return (
    <div className={classnames(className)}>
      {items.length ? (
        <>
          {isDesktop ? (
            <Desktop className={classes.desktop} items={items} />
          ) : (
            <Mobile className={classes.mobile} items={items} />
          )}
        </>
      ) : (
        <NoData />
      )}
      <Pagination
        className={classes.paginate}
        total={count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default Unbondings;
