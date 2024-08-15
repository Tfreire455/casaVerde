<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casa Verde - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin: 5px 0;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Casa Verde 🌿</h1>
        <p><strong>Casa Verde</strong> é uma aplicação desenvolvida durante o desafio 7DaysOfCode da Alura. Este projeto combina um frontend moderno com React e Chakra UI, e um backend em Node.js com Express e Nodemailer para enviar e-mails. O objetivo é criar uma plataforma interativa para inscrições em uma newsletter sobre plantas.</p>

        <h2>📦 Conteúdo do Projeto</h2>
        <h3>Frontend</h3>
        <ul>
            <li><strong>React</strong> e <strong>Chakra UI</strong> para uma interface de usuário moderna e responsiva.</li>
            <li>Componentes principais:
                <ul>
                    <li><code>CardTextEmail</code>: Componente para coleta de e-mails e envio de newsletters.</li>
                    <li><code>Alert</code>: Componente para exibir mensagens de sucesso ou erro.</li>
                </ul>
            </li>
            <li>Publicado em: <a href="https://casa-verde-o9tt.vercel.app/">Vercel</a></li>
        </ul>

        <h3>Backend</h3>
        <ul>
            <li><strong>Node.js</strong> com <strong>Express.js</strong> para criação da API.</li>
            <li><strong>Nodemailer</strong> para envio de e-mails através de um servidor SMTP.</li>
            <li>Configurado para lidar com <strong>CORS</strong> para permitir chamadas do frontend.</li>
            <li>Publicado em: <a href="https://casa-verde-o9tt.vercel.app/">Vercel</a></li>
        </ul>

        <h2>🚀 Como Rodar o Projeto Localmente</h2>
        <h3>Frontend</h3>
        <ol>
            <li>Navegue até a pasta <code>frontend</code>:
                <pre><code>cd frontend</code></pre>
            </li>
            <li>Instale as dependências:
                <pre><code>npm install</code></pre>
            </li>
            <li>Inicie o servidor de desenvolvimento:
                <pre><code>npm start</code></pre>
            </li>
        </ol>

        <h3>Backend</h3>
        <ol>
            <li>Navegue até a pasta <code>backend</code>:
                <pre><code>cd backend</code></pre>
            </li>
            <li>Instale as dependências:
                <pre><code>npm install</code></pre>
            </li>
            <li>Configure o arquivo <code>.env</code> com suas variáveis de ambiente:
                <pre><code>USER_MAIL=seu-email@example.com
USER_PASSWORD=sua-senha
SMTP_HOST=seu-smtp-host
SMTP_PORT=587</code></pre>
            </li>
            <li>Inicie o servidor:
                <pre><code>npm start</code></pre>
            </li>
        </ol>

        <h2>📧 Configuração do Ambiente</h2>
        <p>Certifique-se de ter um arquivo <code>.env</code> configurado corretamente para o backend com as credenciais SMTP necessárias.</p>

        <h2>🌐 Publicação</h2>
        <p>O projeto foi publicado em <a href="https://casa-verde-o9tt.vercel.app/">Vercel</a> e pode ser acessado a partir deste link. O repositório está disponível no <a href="https://github.com/Tfreire455/casaVerde">GitHub</a>.</p>

        <h2>📜 Notas</h2>
        <ul>
            <li>Certifique-se de que as variáveis de ambiente no backend estão corretamente configuradas para garantir o envio de e-mails.</li>
            <li>O frontend e o backend foram implementados em ambientes separados, e o CORS está configurado para permitir solicitações entre eles.</li>
        </ul>

        <h2>🛠 Tecnologias Usadas</h2>
        <ul>
            <li><strong>Frontend</strong>: React, Chakra UI</li>
            <li><strong>Backend</strong>: Node.js, Express, Nodemailer</li>
            <li><strong>Hospedagem</strong>: Vercel</li>
        </ul>

        <h2>🤝 Contribuições</h2>
        <p>Se você deseja contribuir para este projeto, por favor, envie um pull request ou abra uma issue.</p>

        <h2>🔗 Links</h2>
        <ul>
            <li><a href="https://casa-verde-o9tt.vercel.app/">Frontend</a></li>
            <li><a href="https://casa-verde-o9tt.vercel.app/">Backend</a></li>
            <li><a href="https://github.com/Tfreire455/casaVerde">GitHub</a></li>
        </ul>
    </div>
</body>
</html>
