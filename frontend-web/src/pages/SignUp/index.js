import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';

import { isAuthenticated } from '../../services/auth';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const isAuth = await isAuthenticated();

      if (isAuth) {
        history.push('/dashboard');
      }
    })();
  }, [history]);
  async function handleSubmit(data) { }

  return (
    <Container>
      <div>
        <section>
          <img src={logo} alt="Logo do Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft color="#e02041" size={16} />
            Já tenho uma conta
          </Link>
        </section>

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <div>
            <Input name="password" type="password" placeholder="Senha" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar senha"
            />
          </div>
          <Input name="whatsapp" placeholder="WhatsApp" />
          <Input name="address" placeholder="Endereço" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </div>
    </Container>
  );
}
