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
    padding: 0.7rem;
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

    /* Adiciona o gradiente e a imagem como fundo */
    background: linear-gradient(
        180deg,
        rgba(30, 30, 30, 0.5) 5%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(30, 30, 30, 0.5) 95%
    ),
    url('/fotos/foto-sessao-um-5.jpg') no-repeat center/cover;
    filter: grayscale(10%);
    `;

    interface TextOverlayProps {
    isVisible: boolean;
    }

    const TextOverlay = styled.div<TextOverlayProps>`
    position: absolute;
    flex-direction: row-reverse;
    right: 5em;
    display: flex; 
    align-items: center;
    gap: 3rem; 
    color: ${(props) => props.theme.colors.white};
    margin: 0 1em;
    border-radius: 10px;
    width: 95%; 
    max-width: 1000px; 
    padding: 4rem 0;

    /* Animações de entrada e saída */
    ${({ isVisible }) =>
    isVisible
        ? css`
            animation: ${fadeIn} 3s ease-in-out forwards;
        `
        : css`
            animation: ${fadeOut} 3s ease-in-out forwards;
        `}

    h1 {
    margin-top: 0;
    font-size: 5rem; 
    font-weight: bold;
    margin-bottom: 1.5rem;
    }

    p {
    font-size: 1.2rem; 
    line-height: 1.5; 
    font-weight: 400;
    }
    `;

    const ProfileImage = styled.img`
    height: 450px;
    width: 450px;
    object-fit: cover;
    border-radius: 8px;
    `;

    const SessaoTres: React.FC = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            setIsTextVisible(entry.isIntersecting); // Controla visibilidade
        });
        },
        {
        threshold: 0.5, // Ativa quando 50% do elemento está visível
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
    <SectionContainer id="sessao-tres" ref={sectionRef}>
        <ImageContainer>
        <TextOverlay isVisible={isTextVisible}>
            <ProfileImage src="/fotos/perfil-sessao-3.jpg" alt="Foto de perfil" />
            <div>
            <h1>Sobre Mim</h1>
            <p>Sou o Kai, transmasculino, morador e trabalhador na capital paulista. Com experiência em atendimento
            ao cliente em estúdio de tatuagem, entendi que muitas pessoas enfrentam dilemas com tatuagens indesejadas. 
            Motivado por essa realidade, iniciei em 2022 meus estudos na área de remoção a laser, meu foco é proporcionar
            a cada cliente um processo, além de eficiente, respeitoso e acolhedor.
            Se a sua tatuagem já não faz sentido para você, estou aqui para ajudar!
            Entre em contato e juntos encontraremos a melhor solução para o seu caso.
            </p>
            </div>
        </TextOverlay>
        </ImageContainer>
    </SectionContainer>
    );
    };

    export default SessaoTres;
