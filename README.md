
# 🌐 Meus Links Pessoais

## 📝 Descrição

Este é um site simples e eficiente que permite gerenciar e compartilhar links pessoais de forma organizada e visualmente agradável. A aplicação foi desenvolvida com **React**, **TypeScript** e **TailwindCSS**, utilizando o **Firebase** para autenticação e banco de dados. Usuários autenticados podem acessar um painel de administração para gerenciar seus links, enquanto visitantes podem visualizar e explorar as redes sociais e links cadastrados.

## 🚀 Funcionalidades

- **📱 Design Responsivo**: Layout que se adapta a diferentes tamanhos de tela, garantindo uma ótima experiência em dispositivos móveis e desktops.
- **🔐 Autenticação**: Apenas usuários autenticados têm acesso à área administrativa para gerenciar os links.
- **🔗 Gestão de Links**: Funcionalidade para adicionar, editar e remover links personalizados, com uma interface amigável para o usuário.

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - ⚛️ **ReactJS**: Biblioteca JavaScript para construção de interfaces dinâmicas e reativas.
  - 🟦 **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código, aumentando a segurança e eficiência no desenvolvimento.
  - 🎨 **TailwindCSS**: Framework CSS que possibilita um design rápido e personalizável.
  - 🔥 **Firebase**: Responsável pela autenticação e pelo banco de dados em tempo real da aplicação.

## 🔧 Configuração do Firebase

Para executar o projeto localmente, você precisa configurar o Firebase para a autenticação e o banco de dados.

1. **Acesse o Firebase Console**:
   - Entre no [Firebase Console](https://console.firebase.google.com/) e crie um novo projeto (ou use um já existente).

2. **Configurações do Projeto**:
   - No Firebase Console, vá até **Configurações do Projeto** e selecione **Configurações Gerais**. 
   - No painel de configuração, adicione um novo app para web e copie as credenciais de configuração fornecidas pelo Firebase (estas incluem `apiKey`, `authDomain`, `projectId`, etc.).

3. **Arquivo `.env`**:
   - Na raiz do seu projeto, crie um arquivo `.env` e adicione as seguintes variáveis com os valores copiados do Firebase:

     ```plaintext
     VITE_apiKey=your-api-key
     VITE_authDomain=your-auth-domain
     VITE_projectId=your-project-id
     VITE_storageBucket=your-storage-bucket
     VITE_messagingSenderId=your-messaging-sender-id
     VITE_appId=your-app-id
     ```

4. **Habilitar Autenticação**:
   - No Firebase Console, vá até a seção **Authentication** e habilite o método de autenticação desejado (ex: Email/Password).

5. **Configuração do Firestore**:
   - Ainda no Firebase Console, acesse **Firestore Database** e configure um banco de dados no modo de teste para facilitar o desenvolvimento local.

Após essas configurações, o Firebase estará pronto para uso no ambiente local.

## 🗂️ Estrutura do Projeto

### Frontend

- 📂 **`src/components/`**: Componentes reutilizáveis que formam a base da interface da aplicação:
  - 🗂️ **Header**: Cabeçalho da aplicação.
  - 🔤 **Input**: Componentes de entrada de dados.
  - 🔗 **Social**: Exibição dos links sociais cadastrados.
  
- 📂 **`src/pages/`**: Páginas principais que compõem o site:
  - 👨‍💼 **Admin**: Painel administrativo para gerenciamento dos links.
  - ❌ **Error**: Página de erro para rotas inexistentes.
  - 🏠 **Home**: Página inicial com links públicos do usuário.
  - 🔐 **Login**: Página de autenticação do usuário.
  - 🌐 **Networks**: Página com lista de links e redes sociais conectadas.
  
- 📂 **`src/routes/`**: Configuração de rotas e gerenciamento de acessos.
  - 🔒 **Private.tsx**: Componente de rota privada, garantindo acesso apenas para usuários autenticados.

- 📂 **`src/services/`**: Integração com o Firebase para autenticação e conexão com banco de dados.
  - 🔥 **firebaseConnection.ts**: Lida com conexões e operações do Firebase.

- 📂 **`src/App.tsx`**: Componente raiz que organiza as rotas e define a estrutura básica do layout da aplicação.
- 📂 **`src/index.css`**: Arquivo de estilos globais.
- 📂 **`src/main.tsx`**: Arquivo de entrada principal da aplicação.

## ⚙️ Instalação e Execução

1. **Clone o repositório do projeto:**
   ```bash
   git clone https://github.com/jhondharkyson520/devlink.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd devlink
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute a aplicação:**
   ```bash
   npm run dev
   ```

