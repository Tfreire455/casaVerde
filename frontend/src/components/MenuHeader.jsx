import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";

// Define o tipo para a propriedade open
const MenuContainer = styled.header`
  display: flex;
  flex-direction: row;
  margin: 10px 70px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: #000;
    margin: 4px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuItensP = styled.nav`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: white;
    width: 100%;
    padding: 10px 0;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MenuItem = styled(Link)`
  margin: 0 20px;
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 10px;
    text-align: center;
  }
`;

const MenuItens = [
  { name: "Como fazer", path: "/como-fazer" },
  { name: "Ofertas", path: "/ofertas" },
  { name: "Depoimentos", path: "/depoimentos" },
  { name: "Vídeos", path: "/videos" },
  { name: "Meu carrinho", path: "/meu-carrinho" },
];

const MenuHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer>
      <img src={Logo} alt="Logo Casa Verde" />

      <HamburgerIcon onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </HamburgerIcon>

      <MenuItensP open={open}>
        {MenuItens.map((item, index) => (
          <MenuItem key={index} to={item.path}>
            {item.name}
          </MenuItem>
        ))}
      </MenuItensP>
    </MenuContainer>
  );
};

export default MenuHeader;
