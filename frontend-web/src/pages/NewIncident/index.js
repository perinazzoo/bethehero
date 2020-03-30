import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { isAuthenticated } from '../../services/auth';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function NewIncident() {
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (!(await isAuthenticated())) {
        history.push('/');
        toast.error('😔 Sua sessão expirou, por favor, entre novamente.');
      }
    })();
  }, [history]);

  return (
    <Container>
      <div>
        <section>
          <img src={logo} alt="Logo do Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/dashboard">
            <FiArrowLeft color="#e02041" size={16} />
            Voltar
          </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em Reais" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
