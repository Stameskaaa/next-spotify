import { FaSignOutAlt } from 'react-icons/fa'; // Импорт иконки
import styles from '../../styles/loginbutt.module.scss';

export const LoginButt = () => {
  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const redirectUri = 'http://localhost:3000/authorized';
    const scopes = 'user-read-private user-read-email';
    const authEndpoint = 'https://accounts.spotify.com/authorize';

    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=code`;
  };

  return (
    <button onClick={handleLogin} className={styles.Btn}>
      <div className={styles.sign}>
        <FaSignOutAlt />
      </div>
      <div className={styles.text}>Login</div>
    </button>
  );
};
