// src/components/SessaoCinco.tsx
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animações do texto
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
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
    url('/fotos/sessaocinco.JPG') no-repeat center/cover;
  filter: grayscale(20%);
  background-position: 50% 60%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    top: 48%;
    transform: translate(-50%, -48%);
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
  }
`;

interface TextOverlayProps {
  isVisible: boolean;
}

const TextOverlay = styled.div<TextOverlayProps>`
  position: relative;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  margin: 0 1em;
  border-radius: 10px;
  width: 50%;
  max-width: 600px;
  padding: 1.5rem 0 1rem 2.5rem;
  margin-top: -150px;
  margin-left: -130px;

  ${({ isVisible }) =>
    isVisible
      ? css`animation: ${fadeIn} 3s ease-in-out forwards;`
      : css`animation: ${fadeOut} 3s ease-in-out forwards;`}

  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 30px;
    margin-left: 70px;

    @media (max-width: 1024px) {
      font-size: 3.5rem;
      margin-left: 30px;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-left: 0;
      text-align: center;
    }
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 20px;
    margin-left: 70px;

    @media (max-width: 1024px) {
      font-size: 1.5rem;
      margin-left: 30px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-left: 0;
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 1024px) { font-size: 1.1rem; }
    @media (max-width: 768px) { font-size: 1rem; text-align: center; }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    margin-top: 0;
    margin-left: 0;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  gap: 0.5rem;
  width: 100%;

  img {
    flex-shrink: 0;
    width: 100%;
    max-height: 500px;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    scroll-snap-align: center;
    object-fit: cover;

    @media (max-width: 768px) {
      max-height: 300px;
      max-width: 100%;
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background: rgba(255,255,255,0.2);
  }

  &.left {
    left: -2rem;
  }

  &.right {
    right: -2rem;
  }

  @media (max-width: 768px) {
    &.left { left: 0; }
    &.right { right: 0; }
  }
`;

const SessaoCinco: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTextVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 1;

        if (isEnd) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer id="sessao-cinco" ref={sectionRef}>
      <ImageContainer>
        <ContentWrapper>
          <TextOverlay isVisible={isTextVisible}>
            <h1>Resultados</h1>
            <h2>O antes e depois de alguns dos tratamentos que fiz nos últimos meses.</h2>
          </TextOverlay>

          <CarouselWrapper>
            <ArrowButton className="left" onClick={() => scrollCarousel('left')}>&lt;</ArrowButton>

            <CarouselContainer ref={carouselRef}>
              {Array.from({ length: 13 }, (_, i) => (
                <img
                  key={i}
                  src={`/fotos/carrossel${i + 1}.png`}
                  alt={`Antes e Depois ${i + 1}`}
                />
              ))}
            </CarouselContainer>

            <ArrowButton className="right" onClick={() => scrollCarousel('right')}>&gt;</ArrowButton>
          </CarouselWrapper>
        </ContentWrapper>
      </ImageContainer>
    </SectionContainer>
  );
};

export default SessaoCinco;
