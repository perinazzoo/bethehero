import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <img src={logo} alt="Logo do Be The Hero" />
        <span>Bem-vinda, Amigan</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO</strong>
          <p>Caso 1</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição do caso</p>

          <strong>VALOR</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Caso 1</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição do caso</p>

          <strong>VALOR</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Caso 1</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição do caso</p>

          <strong>VALOR</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Caso 1</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição do caso</p>

          <strong>VALOR</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
