import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8976323?s=460&u=3084567be8df57ec600f54ff442a3aa51d8c8dcd&v=4" alt="Valéria Carvalho"/>
          <div>
            <strong>valeriatlcarvalho/financas</strong>
            <p>Aplicação de Finanças para controle financeiro pessoal</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8976323?s=460&u=3084567be8df57ec600f54ff442a3aa51d8c8dcd&v=4" alt="Valéria Carvalho"/>
          <div>
            <strong>valeriatlcarvalho/financas</strong>
            <p>Aplicação de Finanças para controle financeiro pessoal</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8976323?s=460&u=3084567be8df57ec600f54ff442a3aa51d8c8dcd&v=4" alt="Valéria Carvalho"/>
          <div>
            <strong>valeriatlcarvalho/financas</strong>
            <p>Aplicação de Finanças para controle financeiro pessoal</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8976323?s=460&u=3084567be8df57ec600f54ff442a3aa51d8c8dcd&v=4" alt="Valéria Carvalho"/>
          <div>
            <strong>valeriatlcarvalho/financas</strong>
            <p>Aplicação de Finanças para controle financeiro pessoal</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
