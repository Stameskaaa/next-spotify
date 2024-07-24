import styles from '../../../styles/rightsidetop.module.scss';
import Input from '../../input/Input';
import { LoginButt } from '../../loginButt/LoginButt';
const RightSideTop = () => {
  return (
    <div className={styles.container}>
      <p>Welcome back, Kenshii!</p>
      <Input />
      <LoginButt />
    </div>
  );
};
export default RightSideTop;
