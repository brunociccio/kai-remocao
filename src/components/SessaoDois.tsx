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
  padding: 0.7rem 0.7rem;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  background: linear-gradient(180deg, #1e1e1e 100%, #000000 20%, #1e1e1e 90%);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 565px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center -20px;
    filter: grayscale(10%);

    @media (max-width: 768px) {
      height: 650px;
      border-radius: 8px;
    }
  }
`;

interface TextOverlayProps {
  isVisible: boolean;
}

const TextOverlay = styled.div<TextOverlayProps>`
  position: absolute;
  top: 5%;
  right: 5%;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  padding: 2rem 3rem;
  text-align: left;

  @media (max-width: 1024px) {
    top: 10%;
    right: 14%;
    text-align: center;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 -2.5em;
    padding: 1.5rem;
  }

  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${fadeIn} 3s ease-in-out forwards;
        `
      : css`
          animation: ${fadeOut} 3s ease-in-out forwards;
        `}

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
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
      font-size: 0.9rem;
    }
  }
`;

const SessaoDois: React.FC = () => {
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
    <SectionContainer id="sessao-dois" ref={sectionRef}>
      <ImageContainer>
        <img src="/fotos/atendimento-2.jpg" alt="Espaço de Atendimento" />
        <TextOverlay isVisible={isTextVisible}>
          <h2>Espaço de Atendimento</h2>
          <p>
            Nosso ambiente foi planejado para proporcionar o máximo de conforto e
            segurança durante todo o seu tratamento. Independente do motivo que
            tenha levado ao arrependimento ou desconforto com sua tatuagem,
            estamos aqui para ajudar! Conte com o suporte necessário para que você
            se sinta tranquilo e bem atendido em todas as etapas do processo.
            <br />
            <br />
            Local de atendimento:
            <br />
            Av. Pompeia – 1912 - Próximo ao metrô Vila Madalena
          </p>
        </TextOverlay>
      </ImageContainer>
    </SectionContainer>
  );
};

export default SessaoDois;
