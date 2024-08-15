const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require('cors');

// Configura o dotenv para carregar variáveis de ambiente
dotenv.config();

const app = express();

// Configura o CORS para permitir requisições do frontend
app.use(cors({
  origin: 'https://casa-verde-nu-eight.vercel.app' // Substitua pelo URL do seu frontend
}));

// Configura o middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Variáveis de ambiente para o transporte de e-mail
const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.USER_MAIL;
const pass = process.env.USER_PASSWORD;

// Rota para verificar se o servidor está funcionando
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota para enviar e-mail
app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "O e-mail é necessário" });
  }

  // Configuração do transporte de e-mail
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false, // Porta 587 usa STARTTLS
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false, // Permite certificados autoassinados
    },
  });

  try {
    console.log("Sending email to:", email); // Log para verificar o e-mail

    // Envio do e-mail
    const info = await transporter.sendMail({
      from: user,
      to: email,
      subject: "Test Email",
      html: "<h1>Hi, this is a test email</h1><p>This is a test email sent from Node.js using Express.js and Nodemailer.</p>",
      text: "Obrigado pela sua inscrição, você receberá nossas novidades no e-mail",
    });

    console.log("Message sent:", info.messageId); // Log para verificar o ID da mensagem
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error); // Log detalhado do erro
    res
      .status(500)
      .json({ error: "Erro ao enviar e-mail", details: error.message });
  }
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
