'use client';
import Link from 'next/link';
import styles from '../../styles/leftsidebar.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Path {
  path: string;
  text: string;
  id: number;
  icon: null; // TODO испроавить
}

const paths = [
  { path: '/', text: 'Home', icon: null, id: 1 },
  { path: '/', text: 'Songs', icon: null, id: 2 },
  { path: '/', text: 'Artists', icon: null, id: 3 },
  { path: '/', text: 'Albums', icon: null, id: 4 },
  { path: '/', text: 'Podcasts', icon: null, id: 5 },
] as Path[];

const getActivePath = (pathname: string) => {
  let activePath = { path: '/', text: 'Home', icon: null, id: 1 };
  paths.map((element) => {
    pathname.includes(element.text.toLowerCase()) ? (activePath = element) : null;
  });
  return activePath;
};

const LeftSideBar = () => {
  const pathname = usePathname();
  const [activeIndex, setAtiveIndex] = useState(() => getActivePath(pathname));

  const changeActivePath = (element: Path) => {
    setAtiveIndex(element);
  };

  return (
    <div className={styles.container}>
      <div className={styles.link_container}>
        {paths.map((element) => {
          return (
            <Link
              onClick={() => changeActivePath(element)}
              key={element.id}
              className={`${element.id === activeIndex.id ? styles.active : null} ${styles.link}`}
              href={element.path}>
              {element.text}
            </Link>
          );
        })}
      </div>
      {/* <hr className={styles.hr} /> */}
      <p>Your Collections +</p>
    </div>
  );
};

export default LeftSideBar;
