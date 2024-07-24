'use client';

import LeftSideBar from './components/leftsidebar/LeftSideBar';
import RightSide from './components/rightside/RightSide';
import { useAppSelector } from './redux/hooks/hooks';
import styles from './styles/mainpage.module.scss';

export default function Home() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <button onClick={() => console.log(isAuthenticated, document.cookie)}>123</button>
      <LeftSideBar />
      <RightSide />
    </div>
  );
}
