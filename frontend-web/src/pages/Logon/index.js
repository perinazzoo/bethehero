import React, { useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { login } from '../../services/auth';
import api from '../../services/api';

import { Container, FormLogon } from './styles';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido.')
    .required('O campo email é obrigatório.'),
  password: Yup.string().required('O campo senha é obrigatório.'),
});

export default function Logon() {
  const { push, action } = useHistory();

  useEffect(() => {
    if (action === 'REPLACE') {
      toast.error('Sua sessão expirou 😕');
    }
  }, []);

  async function handleSubmit({ email, password }) {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password,
      });

      login(data.token, data.name, data.expireAt);

      push('/dashboard');
    } catch (err) {
      toast.error('Parece que algo deu errado, por favor, tente novamente 😕');
    }
  }

  return (
    <Container>
      <>
        <FormLogon>
          <img src={logo} alt="Logo do Be The Hero" />

          <Form schema={schema} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" type="text" placeholder="Seu e-mail" />
            <Input name="password" type="password" placeholder="Sua senha" />
            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/register">
              <FiLogIn color="#e02041" size={16} />
              Não tenho cadastro
            </Link>
          </Form>
        </FormLogon>

        <img src={heroesImg} alt="Heróis" />
      </>
    </Container>
  );
}
