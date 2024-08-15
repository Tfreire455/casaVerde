import React from "react";
import styled from "styled-components";

// Define os tipos das propriedades do Alert
interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning"; // Tipos de alerta
}

// Estilizando o contêiner principal do alerta
const AlertContainer = styled.div<{ type?: "success" | "error" | "warning" }>`
  padding: 15px 20px;
  border-radius: 5px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin: 10px 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => {
    switch (props.type) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#F44336";
      case "warning":
        return "#FFC107";
      default:
        return "#2196F3"; // cor padrão
    }
  }};
`;

// Ícone de alerta
const AlertIcon = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;

// Texto do alerta
const AlertText = styled.span`
  font-size: 16px;
`;

// Componente funcional de Alerta
const Alert: React.FC<AlertProps> = ({ message, type = "success" }) => {
  return (
    <AlertContainer type={type}>
      <AlertIcon>
        {type === "success" ? "✔️" : type === "error" ? "❌" : "⚠️"}
      </AlertIcon>
      <AlertText>{message}</AlertText>
    </AlertContainer>
  );
};

export default Alert;
