import React from 'react';
import styles from '../../../styles/rightsidebottom.module.scss';
import TrendingBlock from '../../trendingblock/TrendingBlock';
const RightSideBottom = () => {
  return (
    <div className={styles.container}>
      <TrendingBlock />
    </div>
  );
};

export default RightSideBottom;
