import React from 'react';
import { NavLinkStyled } from './styles';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Sports Betting Site</h1>
      <nav style={navStyle}>
        <NavLinkStyled to="/" >Home</NavLinkStyled>
        <NavLinkStyled to="/matches" >Upcoming Matches</NavLinkStyled>
      </nav>
    </header>
  );
}

const headerStyle: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'left',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
};

const titleStyle: React.CSSProperties = {
  margin: 0,
};

const navStyle: React.CSSProperties = {
  display: 'inline',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  borderBottom: '2px solid transparent',
};


export default Header;