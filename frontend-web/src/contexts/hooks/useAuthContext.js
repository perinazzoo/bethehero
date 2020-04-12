import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

const STORAGE_KEY = '@bethehero';

export default function useAuthContext() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (
      current &&
      current.token &&
      new Date() < new Date(current.expireAt * 1000)
    ) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password,
      });
      localStorage.setItem(
        '@bethehero',
        JSON.stringify({
          token: data.token,
          name: data.name,
          expireAt: data.expireAt,
        })
      );
      setAuthenticated(true);
      history.push('/dashboard');
    } catch (err) {
      toast.error('Parece que algo deu errado, por favor, tente novamente 😕');
    }
  }

  async function handleRegister({
    name,
    email,
    password,
    confirmPassword,
    whatsapp,
    address,
  }) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
        confirmPassword,
        whatsapp,
        address,
      });

      handleLogin({ email, password });
      toast(`yayy! Seja bem-vinda ${name} 🦄`);
    } catch (err) {
      toast.error('Parece que algo deu errado, por favor, tente novamente 😕');
    }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setAuthenticated(false);
    history.push('/');
  }

  return { authenticated, loading, handleLogin, handleRegister, logout };
}
