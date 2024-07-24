'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setAuth } from '../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

const ProtectedPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      fetchTokens();
    }
  }, [isAuthenticated]);

  const fetchTokens = async () => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (!code) {
      console.error('Authorization code is missing');
      return;
    }

    try {
      const response = await fetch(`/api/auth/login?code=${code}`, {
        method: 'GET',
        credentials: 'include',
      });

      console.log('API response:', response);

      if (response.ok) {
        const data = await response.json();
        console.log('Token data:', data);

        dispatch(setAuth(true));

        router.push('/');
      } else {
        console.error('Ошибка при получении токенов');
      }
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };

  return <div>Loading...</div>;
};

export default ProtectedPage;
