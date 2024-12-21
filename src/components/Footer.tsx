import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 2rem 6rem 2rem;
  background: linear-gradient(0deg, #000000 30%, #1e1e1e 100%);
  color: ${(props) => props.theme.colors.white};
  text-align: left;

  @media (max-width: 768px) {
    padding: 0 1em 2em 1em; /* Reduz o espaçamento geral em celulares */
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-left: 3em;

  @media (max-width: 768px) {
    margin-left: 0.5em; /* Ajusta a margem à esquerda em celulares */
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  margin-left: 3em;

  @media (max-width: 768px) {
    margin-left: 3em; /* Ajusta a margem à esquerda em celulares */
    gap: 0.5rem; /* Reduz o espaçamento entre itens */
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduz o espaçamento entre ícones e links */
  }
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
    color: #005a9e;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho da fonte em celulares */
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px; /* Reduz o tamanho dos ícones em celulares */
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

        {/* Endereço */}
        <ContactItem>
          <Icon src="/fotos/googlemaps.png" alt="Localização" />
          <ContactLink
            href="https://www.google.com/maps/place/Av.+Pompeia,+1912"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Pompeia, 1912
          </ContactLink>
        </ContactItem>
      </ContactContainer>

      {/* Margem inferior */}
      <div style={{ marginTop: '2em' }} />
    </FooterContainer>
  );
};

export default Footer;
