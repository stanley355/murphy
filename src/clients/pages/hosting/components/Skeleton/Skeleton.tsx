import React from 'react';
import classnames from 'classnames';
import styles from './Skeleton.module.scss';

import useResponsive from '../../../../../utils/hooks/useResponsive';

const Skeleton = () => {
  const { isDesktop } = useResponsive();

  const MobileSkeleton = () => {
    return (
      <div className={styles.skeleton__body}>
        <div className={classnames(styles['skeleton__box'], styles['skeleton__large'])} />
        <div className={classnames(styles['skeleton__box'], styles['skeleton__large'])} />
      </div>
    );
  }

  const DesktopSkeleton = () => {
    return (
      <div className={styles.skeleton__body}>
        <div className={styles.skeleton__body__list}>
          <div className={classnames(styles['skeleton__box'], styles['skeleton__large'])} />
          <div className={classnames(styles['skeleton__box'], styles['skeleton__large'])} />
          <div className={classnames(styles['skeleton__box'], styles['skeleton__large'])} />
        </div>
        <div className={classnames(styles['skeleton__box'], styles['skeleton__extraLarge'])} />
      </div>
    );
  }

  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__head}>
        <div className={classnames(styles['skeleton__box'], styles['skeleton__small'])} />
        <div className={styles.skeleton__box} />
      </div>
      {isDesktop ? <DesktopSkeleton /> : <MobileSkeleton />}
    </div>
  );
};

export default Skeleton;
