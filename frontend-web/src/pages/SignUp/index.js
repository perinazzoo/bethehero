import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { isAuthenticated } from '../../services/auth';
import api from '../../services/api';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Preencha o campo nome'),
  email: Yup.string()
    .email('Insira um email válido.')
    .required('Preencha o campo email'),
  password: Yup.string()
    .min(6, 'A senha precisa ter pelo menos 6 digitos')
    .required('Preencha o campo senha.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não conferem')
    .required('Preencha o campo confirmação.'),
  whatsapp: Yup.string().required('Preencha o campo WhatsApp.'),
  address: Yup.string().required('Preencha o campo endereço'),
});

export default function SignUp() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const isAuth = await isAuthenticated();

      if (isAuth) {
        return history.push('/dashboard');
      }

      return setLoading(false);
    })();
  }, [history]);

  async function handleSubmit({
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
      history.push('/');
      toast(`yayy! Seja bem-vinda ${name} 🦄`);
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

            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>

            <Link className="back-link" to="/">
              <FiArrowLeft color="#e02041" size={16} />
              Já tenho uma conta
            </Link>
          </section>

          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome da ONG" />
            <Input name="email" type="email" placeholder="E-mail" />
            <div>
              <div>
                <Input name="password" type="password" placeholder="Senha" />
              </div>
              <div>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmar senha"
                />
              </div>
            </div>
            <Input name="whatsapp" placeholder="WhatsApp" />
            <Input name="address" placeholder="Endereço" />

            <button type="submit" className="button">
              Cadastrar
            </button>
          </Form>
        </div>
      )}
    </Container>
  );
}
