import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0); 
  }
  to {
    opacity: 0;
    transform: translateY(20px); 
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.7rem;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  background: linear-gradient(180deg, #1e1e1e 90%, #000000 20%, #1e1e1e 90%);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 565px;
  border-radius: 8px;
  overflow: hidden;

  background: linear-gradient(
      180deg,
      rgba(30, 30, 30, 0.4) 5%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(30, 30, 30, 0.4) 95%
    ),
    url('/teste-bg-4.jpg') no-repeat center/cover;
  filter: grayscale(20%);
`;

interface TextOverlayProps {
  isVisible: boolean;
}

const TextOverlay = styled.div<TextOverlayProps>`
  position: absolute;

  transform: translate(-50%, -50%);
  text-align: left;

  color: ${(props) => props.theme.colors.white};
  margin: 0 1em;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  padding: 2rem 2rem 1rem 2.5rem;

  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${fadeIn} 3s ease-in-out forwards;
        `
      : css`
          animation: ${fadeOut} 3s ease-in-out forwards;
        `}

  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 4rem; 
    }

    @media (max-width: 768px) {
      font-size: 3rem; 
    }
  }

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 2rem; 
    }

    @media (max-width: 768px) {
      font-size: 1.7rem; 
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem; 
    }
  }
`;

const SessaoQuatro: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTextVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionContainer id="sessao-quatro" ref={sectionRef}>
      <ImageContainer>
        <TextOverlay isVisible={isTextVisible}>
          <h1>Avaliações</h1>
          <h2>O que os clientes dizem sobre<br />os meus atendimentos</h2>
          <p>
            Sua satisfação é a minha prioridade! Confira o que meus clientes
            <br />
            têm a dizer sobre o atendimento e os resultados que ofereço.
            <br />
            <br />
            <a
              href="https://www.google.com/search?q=+kai+remo%C3%A7%C3%A3o&sca_esv=0906209586f9cb0f&ei=aVhcZ_SjCpDd5OUPiuviwQY&ved=0ahUKEwi0_KqgjaWKAxWQLrkGHYq1OGgQ4dUDCBA&uact=5&oq=+kai+remo%C3%A7%C3%A3o&gs_lp=Egxnd3Mtd2l6LXNlcnAiDiBrYWkgcmVtb8Onw6NvMgQQABgeSJ8BUABYAHAAeAGQAQCYAXSgAXSqAQMwLjG4AQPIAQD4AQGYAgGgAoABmAMAkgcDMC4xoAeAAQ&sclient=gws-wiz-serp#lrd=0x94ce590cd911f9bf:0xf3200e4a42f01527,1,,,,"
              target="_blank"
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              Clique aqui para ver nossas avaliações no Google
            </a>
          </p>
        </TextOverlay>
      </ImageContainer>
    </SectionContainer>
  );
};

export default SessaoQuatro;
