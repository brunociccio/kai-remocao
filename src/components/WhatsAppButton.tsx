    // components/WhatsAppButton.tsx
    import React from 'react';
    import styled from 'styled-components';
    import { FaWhatsapp } from 'react-icons/fa';

    const ButtonContainer = styled.a`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
    }

    &:active {
    transform: scale(0.9);
    }
    `;

    const WhatsAppButton: React.FC = () => {
    return (
    <ButtonContainer
        href="https://api.whatsapp.com/send/?phone=5511953578224&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaWhatsapp size={30} />
    </ButtonContainer>
    );
    };

    export default WhatsAppButton;
