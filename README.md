# 📚 API Web - Biblioteca (Gestão de Livros)

API RESTful desenvolvida em **Node.js** com **TypeScript** para o gerenciamento de livros de uma biblioteca. O projeto utiliza **TypeORM** para persistência de dados e segue uma arquitetura simplificada baseada em **Controller/Repository**.

## 🚀 Tecnologias Utilizadas

* **Node.js** & **TypeScript**
* **Express** (Framework Web)
* **TypeORM** (ORM para banco de dados)
* **SQLite** (Banco de dados relacional em arquivo)
* **Reflect-metadata** (Decorators)

## 📂 Arquitetura

O projeto segue a separação de responsabilidades solicitada:
* **Entity:** Definição da tabela `Livro` no banco de dados.
* **Controller:** Lógica de negócio e controle das requisições HTTP.
* **Repository:** Camada de acesso aos dados (gerenciada pelo TypeORM).

## 🛠️ Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/api-biblioteca-nodejs.git](https://github.com/SEU_USUARIO/api-biblioteca-nodejs.git)
   cd api-biblioteca-nodejs

   Instale as dependências:

Bash

npm install
Execute o servidor (Modo Desenvolvimento):

Bash

npm run dev
O servidor iniciará na porta 3000 e o banco de dados database.sqlite será criado automaticamente.

🔗 Endpoints da API
1. Criar Livro
URL: /api/livros

Método: POST

Corpo (JSON):

JSON

{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "isbn": "978-850",
  "anoPublicacao": 1899,
  "disponivel": true
}
2. Listar Todos os Livros
URL: /api/livros

Método: GET

3. Buscar Livro por ID
URL: /api/livros/{id}

Método: GET

Exemplo: http://localhost:3000/api/livros/1

4. Atualizar Livro
URL: /api/livros/{id}

Método: PUT

Corpo (JSON):

JSON

{
  "titulo": "Dom Casmurro - Edição Especial",
  "autor": "Machado de Assis",
  "isbn": "978-850",
  "anoPublicacao": 1900,
  "disponivel": false
}
5. Excluir Livro
URL: /api/livros/{id}

Método: DELETE

🧪 Como Testar
Você pode testar as rotas utilizando ferramentas como:

Insomnia ou Postman

Thunder Client (Extensão do VS Code)

Ou via terminal usando cURL ou PowerShell.

Desenvolvido como exercício prático de Backend.


---

### Passo 2: Atualizar no GitHub

Depois de salvar o arquivo, você precisa enviar essa alteração para o GitHub para que ela apareça na página inicial do seu repositório.

No terminal, rode:

```bash
git add README.md
git commit -m "Adiciona documentacao README"
git push

Agora, ao entrar no link do seu GitHub, você verá toda essa documentação bonitinha na tela inicial!
