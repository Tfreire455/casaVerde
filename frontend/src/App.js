import { BgImageRight } from "./components/BgImageRight";
import MenuHeader from "./components/MenuHeader";
import Vector from "./assets/Vector.svg";
import styled from "styled-components";
import BgImagePng from "./assets/BgImage.png";
import Linhas from "./assets/Linhas.png";
import CardTextEmail from "./components/CardTextInputEmail";

// Estiliza o contêiner para a imagem de fundo principal
const BgImage = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${BgImagePng});
  background-size: cover; /* Garante que a imagem cubra toda a área */
  background-position: center;
  z-index: -1; /* Mantém a imagem de fundo atrás dos outros elementos */

  @media (max-width: 768px) {
    height: 50vh; /* Ajusta a altura para telas menores */
  }

  @media (max-width: 480px) {
    height: 30vh; /* Ajusta ainda mais para telas muito pequenas */
  }
`;

// Estiliza o contêiner para a segunda imagem (Linhas)
const LinhasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${Linhas});
  background-size: cover; /* Garante que a imagem cubra toda a área */
  background-position: center;
  z-index: -1; /* Mantém essa imagem de fundo atrás dos outros elementos */

  @media (max-width: 768px) {
    height: 50vh; /* Ajusta a altura para telas menores */
  }

  @media (max-width: 480px) {
    height: 30vh; /* Ajusta ainda mais para telas muito pequenas */
  }
`;

// Estiliza o contêiner principal da aplicação
const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto; /* Permite que a altura seja automática em telas menores */
  }
`;

function App() {
  return (
    <AppContainer>
      {/* Renderiza a imagem de fundo com as linhas */}
      <LinhasContainer />
      {/* Renderiza a imagem de fundo principal */}
      <BgImage />
      {/* Renderiza a imagem SVG que deve aparecer à direita */}
      <BgImageRight src={Vector} />
      {/* Renderiza o cabeçalho do menu */}
      <MenuHeader />
      {/* Renderiza o card do lado direito da aplicação */}
      <CardTextEmail />
    </AppContainer>
  );
}

export default App;
