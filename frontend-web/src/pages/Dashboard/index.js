import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { logout } from '../../services/auth';
import api from '../../services/api';
import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function Dashboard() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('@bethehero'));

    setUser(name.toUpperCase());
    (async () => {
      try {
        const { data } = await api.get('/dashboard');

        setIncidents(data);
      } catch ({ response }) {
        if (response.data.error) {
          logout();
          history.replace('/');
        }
      }
    })();
  }, [history]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`);
      toast('🦄 Caso deletado com sucesso!');

      setIncidents(incidents.filter((i) => i.id !== id));
    } catch (err) {
      toast.error('Parece que algo deu errado, por favor, tente novamente 😕');
    }
  }

  function handleLogout() {
    logout();
    history.push('/');
    toast('Ah não! Sentiremos saudades ❤️');
  }

  return (
    <Container>
      <>
        <header>
          <img src={logo} alt="Logo do Be The Hero" />
          <span>Bem-vinda, {user}</span>

          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>

          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
          {incidents.map((i) => (
            <li key={i.id}>
              <strong>CASO</strong>
              <p>{i.title}</p>

              <strong>DESCRIÇÃO</strong>
              <p>{i.description}</p>

              <strong>VALOR</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(i.value)}
              </p>

              <button type="button" onClick={() => handleDelete(i.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </>
    </Container>
  );
}
