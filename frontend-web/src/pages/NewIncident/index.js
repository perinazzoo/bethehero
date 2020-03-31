import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Form, Input, Textarea } from '@rocketseat/unform';

import { isAuthenticated } from '../../services/auth';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function NewIncident() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!(await isAuthenticated())) {
        history.push('/');
        return toast.error(
          '😔 Sua sessão expirou, por favor, entre novamente.'
        );
      }

      return setLoading(false);
    })();
  }, [history]);

  async function handleSubmit({ title, description, value }) {
    try {
      await api.post('/incidents', {
        title,
        description,
        value,
      });
      history.push('/dashboard');
      toast(`Caso "${title}" criado com sucesso! 🦄`);
    } catch (err) {
      toast.error('Parece que algo deu errado, por favor, tente novamente 😕');
    }
  }

  return (
    <Container>
      {!loading && (
        <div>
          <section>
            <img src={logo} alt="Logo do Be The Hero" />

            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso.
            </p>

            <Link className="back-link" to="/dashboard">
              <FiArrowLeft color="#e02041" size={16} />
              Voltar
            </Link>
          </section>

          <Form onSubmit={handleSubmit}>
            <Input name="title" placeholder="Titulo do caso" />
            <Textarea name="description" placeholder="Descrição" />
            <Input name="value" placeholder="Valor em Reais" />

            <button type="submit" className="button">
              Cadastrar
            </button>
          </Form>
        </div>
      )}
    </Container>
  );
}
