import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function SignUp() {
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
            Não tenho cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <input placeholder="Endereço" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
