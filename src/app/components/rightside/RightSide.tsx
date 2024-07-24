import styles from '../../styles/rightside.module.scss';
import RightSideTop from './rightsidetop/RightSideTop';
import RightSideBottom from './rightsidebottom/RightSideBottom';
const RightSide = () => {
  return (
    <div className={styles.container}>
      <RightSideTop />
      <RightSideBottom />
    </div>
  );
};

export default RightSide;
