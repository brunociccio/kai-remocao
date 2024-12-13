// components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4rem 0.5rem 4rem;
  background: linear-gradient(180deg, #000000 20%, #1e1e1e 90%);
  color: ${(props) => props.theme.colors.white};
`;

const Logo = styled.div`
  font-size: 3.5rem;
  font-weight: 100;
`;

const Nav = styled.nav`
  font-size: 1.2rem;
  display: flex;
  gap: 10rem;
  margin-right: 7em;
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray};
  }

  &:active {
    color: #005a9e;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>KR</Logo>
      <Nav>
        {/* Link para o WhatsApp */}
        <NavLink
          href="https://wa.me/5511956578224"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faça seu Orçamento
        </NavLink>

        {/* Link para as Avaliações no Google */}
        <NavLink
          href="https://www.google.com/search?q=+kai+remo%C3%A7%C3%A3o&sca_esv=0906209586f9cb0f&ei=aVhcZ_SjCpDd5OUPiuviwQY&ved=0ahUKEwi0_KqgjaWKAxWQLrkGHYq1OGgQ4dUDCBA&uact=5&oq=+kai+remo%C3%A7%C3%A3o&gs_lp=Egxnd3Mtd2l6LXNlcnAiDiBrYWkgcmVtb8Onw6NvMgQQABgeSJ8BUABYAHAAeAGQAQCYAXSgAXSqAQMwLjG4AQPIAQD4AQGYAgGgAoABmAMAkgcDMC4xoAeAAQ&sclient=gws-wiz-serp#lrd=0x94ce590cd911f9bf:0xf3200e4a42f01527,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          Avaliações
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
