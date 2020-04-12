import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useAuth } from '../../contexts/AuthContext';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

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
  const { handleRegister } = useAuth();

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

        <Form schema={schema} onSubmit={handleRegister}>
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
    </Container>
  );
}
