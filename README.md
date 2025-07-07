# Teste Connect Digital

    por Kleiton Lima

## O teste consiste em uma api que possui:

- endpoint capaz de receber um webhook, tratar e salvar os dados
- endpoint para pesquisa onde é possível pesquisar por vários campos
- endpoint para gerar QR Code PIX
- frontend contendo página para gerar pagamento

## Requisitos para execução
- Git
- Docker Desktop e Docker CLI em execução

## Como executar a aplicação

1. Abra o terminal na pasta onde deseja criar uma cópia do repositório.

2. Clone o repositório em sua máquina:

   ```
   git clone https://github.com/KleitonLima/connect-digital-test.git
   ```

3. Entre no diretório clonado:

   ```
   cd connect-digital-test/backend
   ```

4. Transforme o .env.example em .env

   ```
   cp .env.example .env
   ```

5. Volte para o repositório principal e entre no repositório do frontend

   ```
   cd ..
   ```

   ```
   cd frontend
   ```

6. Transforme o .env.example em .env

   ```
   cp .env.example .env
   ```

7. Volte para o repositório principal e execute a criação da imagem da API e do banco de dados nos containers docker

   ```
   cd ..
   ```

   ```
   docker compose up -d --build
   ```

8. Acesse a API através de

   ```
   http://localhost:3232/api/v0
   ```

9. Acesse a documentação Swagger através de

   ```
   http://localhost:3232/api/v0/docs
   ```

10. Acesse o frontend através de

   ```
   http://localhost:5173
   ```
    

No passo 4 serão criadas uma imagem do banco de dados e uma da API. Em seguida, essas imagens serão usadas para criar os respectivos containers.

Depois de criado, serão gerados automaticamente as tabelas no banco de dados e a API e o banco estarão prontos.

Na UI do Swagger é possível testar todos os endpoints da API.

Todos os endpoints já estão com os exemplos para teste, bastando apenas executar cada um deles.

## Tecnologias usadas

- **Linguagem:** <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" height="24" /></a>

- **Backend:** <a href="https://nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" height="24" /></a>

- **ORM:** <a href="https://typeorm.io/" target="_blank"><img src="https://img.shields.io/badge/TypeORM-FF4785?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" height="24" /></a>

- **Banco de Dados:** <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" height="24" /></a>

- **Validação:** <a href="https://www.npmjs.com/package/class-validator" target="_blank"><img src="https://img.shields.io/badge/class--validator-ffb300?style=for-the-badge&logo=checkmarx&logoColor=white" alt="class-validator" height="24" /></a> <a href="https://www.npmjs.com/package/class-transformer" target="_blank"><img src="https://img.shields.io/badge/class--transformer-00bcd4?style=for-the-badge&logo=autodesk&logoColor=white" alt="class-transformer" height="24" /></a>

- **Documentação:** <a href="https://swagger.io/" target="_blank"><img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" height="24" /></a>
