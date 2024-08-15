import { useState, useEffect } from "react";
import PlantaPrincipal from "../assets/imagemplanta1.png";
import Alert from "./Alert.tsx";
import {
  TitleTextP,
  TextH1,
  ContentTextP,
  DivEmail,
  InputEmail,
  BtnSubmitEmail,
  DivRow,
  CardImageOne,
  CardContentRight,
} from "./StyledComponents.jsx";

const CardTextEmail = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  // Certifique-se de que baseUrl está correto
  const baseUrl = "https://casa-verde-o9tt.vercel.app"; // URL do backend


  const sendEmail = async () => {
    let dataSend = {
      email: email,
    };

    try {
      const res = await fetch(`${baseUrl}`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setAlert({
          message: "Enviado com sucesso!",
          type: "success",
        });
      } else {
        const errorData = await res.json();
        setAlert({
          message: errorData.error || "Falha ao enviar!",
          type: "error",
        });
      }
    } catch (error) {
      setAlert({
        message: "Erro de rede ou de servidor!",
        type: "error",
      });
    }
  };

  useEffect(() => {
    let timer;
    if (alert) {
      timer = setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [alert]);

  const handleSubmit = () => {
    if (!email) {
      setAlert({ message: "Insira um email válido!", type: "error" });
    } else {
      sendEmail();
    }
  };

  return (
    <DivRow>
      <CardContentRight>
        <TitleTextP>Sua casa com as</TitleTextP>
        <TextH1>
          melhores
          <br />
          plantas
        </TextH1>
        <ContentTextP>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </ContentTextP>
        <DivEmail>
          <InputEmail
            type="email"
            placeholder="Insira seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <BtnSubmitEmail onClick={handleSubmit}>
            Assinar newsletter
          </BtnSubmitEmail>
        </DivEmail>
        {alert && <Alert message={alert.message} type={alert.type} />}
      </CardContentRight>
      <CardImageOne src={PlantaPrincipal} alt="Imagem da planta" />
    </DivRow>
  );
};

export default CardTextEmail;
