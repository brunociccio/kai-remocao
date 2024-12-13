// components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhamento à esquerda */
  padding: 2rem 2rem 6rem 2rem;
  background: linear-gradient(0deg, #000000 30%, #1e1e1e 100%);
  color: ${(props) => props.theme.colors.white};
  text-align: left; /* Texto alinhado à esquerda */
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-top: 2em;
  margin-bottom: 2rem;
  margin-left: 3em; /* Distância da margem esquerda */
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start; /* Alinhamento à esquerda */
  margin-left: 11em; /* Distância da margem esquerda */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.5s ease;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray};
  }
    &:active {
    color: #005a9e
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.8rem;
  margin-left: 11em; /* Distância da margem esquerda */

  img {
    width: 30px;
    height: 30px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Title>Contatos</Title>
      <ContactContainer>
        {/* WhatsApp */}
        <ContactItem>
          <Icon src="/fotos/whatsapp.png" alt="WhatsApp" />
          <ContactLink
            href="https://wa.me/5511956578224"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 9-5657-8224
          </ContactLink>
        </ContactItem>

        {/* Instagram */}
        <ContactItem>
          <Icon src="/fotos/instagram.png" alt="Instagram" />
          <ContactLink
            href="https://www.instagram.com/kai.remocao.tattoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            kai.remocao.tattoo
          </ContactLink>
        </ContactItem>
      </ContactContainer>

      {/* Endereço */}
      <AddressContainer>
        <img src="/fotos/googlemaps.png" alt="Localização" />
        <ContactLink
          href="https://www.google.com/maps/place/Av.+Pompeia,+1912"
          target="_blank"
          rel="noopener noreferrer"
        >
        Av. Pompeia, 1912
        </ContactLink>
      </AddressContainer>
    </FooterContainer>
  );
};

export default Footer;
