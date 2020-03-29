import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <Container>
      <Form>
        <img src={logo} alt="Logo do Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="Seu e-mail" />
          <input type="text" placeholder="Sua senha" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn color="#e02041" size={16} />
            Não tenho cadastro
          </Link>
        </form>
      </Form>

      <img src={heroesImg} alt="Heróis" />
    </Container>
  );
}
