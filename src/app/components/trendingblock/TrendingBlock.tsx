import React from 'react';
import styles from '../../styles/trendingbar.module.scss';
import SeeAllButt from '../seeallbutt/SeeAllButt';
import SongCard from '../songcard/SongCard';

const TrendingBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {' '}
        <p>Trending songs this week</p>
        <SeeAllButt />
      </div>
      <div className={styles.main}>
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
};

export default TrendingBlock;
