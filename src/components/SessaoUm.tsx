import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Começa fora da posição */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Volta à posição original */
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
    url('/fotos/teste-bg-3.jpg') no-repeat center/cover;
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
  padding: 3rem 2rem 1rem 2.5rem;

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
      font-size: 4rem; /* Ajuste para telas de tablet */
    }

    @media (max-width: 768px) {
      font-size: 3rem; /* Ajuste para telas de celular */
    }
  }

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 2rem; /* Ajuste para telas de tablet */
    }

    @media (max-width: 768px) {
      font-size: 1.7rem; /* Ajuste para telas de celular */
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 1.1rem; /* Ajuste para telas de tablet */
    }

    @media (max-width: 768px) {
      font-size: 1rem; /* Ajuste para telas de celular */
    }
  }
`;

const SessaoUm: React.FC = () => {
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
    <SectionContainer id="sessao-um" ref={sectionRef}>
      <ImageContainer>
        <TextOverlay isVisible={isTextVisible}>
          <h1>Serviços</h1>
          <h2>
            Remoção de micropigmentação <br /> ou tatuagem a laser
          </h2>
          <p>
            Livre-se do que não te representa mais de forma segura, rápida
            <br />
            e eficaz! Em nosso espaço, você encontrará um ambiente
            <br />
            acolhedor, com atendimento especializado e suporte
            <br />
            completo durante todo o processo.
          </p>
        </TextOverlay>
      </ImageContainer>
    </SectionContainer>
  );
};

export default SessaoUm;
