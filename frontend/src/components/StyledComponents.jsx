import styled from "styled-components";

// Estiliza o título pequeno
export const TitleTextP = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #20202050;
  width: 181px;
  height: 27px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
    text-align: center;
  }
`;

// Estiliza o título principal
export const TextH1 = styled.h1`
  font-family: Elsie Swash Caps;
  font-size: 82px;
  color: #202020;
  font-weight: 900;
  text-align: start;
  line-height: 0.9;
  height: 188px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    text-align: center;
  }
`;

// Estiliza o conteúdo descritivo
export const ContentTextP = styled.p`
  height: 99px;
  margin-top: 20px;
  opacity: 0.5;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  color: #20202080;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`;

// Estiliza o contêiner do e-mail
export const DivEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Estiliza o input de e-mail
export const InputEmail = styled.input`
  padding: 20px;
  width: 350px;
  height: 50px;
  border: none;
  margin-top: 20px;
  outline: none;
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

// Estiliza o botão de envio
export const BtnSubmitEmail = styled.button`
  border: none;
  background-color: #ffcb47;
  color: #fff;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 10px;
  }
`;

// Estiliza a imagem da planta
export const CardImageOne = styled.img`
  width: 381px;
  margin-right: 20px;
  opacity: 1;
  z-index: 1;
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

// Estiliza o conteúdo do card
export const CardContentRight = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  text-align: start;
  width: 100%;
  padding: 0px 5px;
  align-items: start;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
  }
`;

// Estiliza a div de linha (organiza o conteúdo)
export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
