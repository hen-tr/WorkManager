import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">Usuários</Link>
        <Link to="/teamUsers">Criar Time</Link>
        <Link to="/createTeam">Criar Time</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
