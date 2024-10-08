# ATIVIDADE DE ESTÁGIO 

O desenvolvimento de software é um processo complexo que envolve a criação, modelagem de dados, manutenção e aprimoramento de sistemas de software. Durante o estágio de desenvolvimento, os engenheiros de software trabalham em conjunto para transformar requisitos em código funcional.

## Escopo
Antes de iniciar qualquer projeto, é essencial entender os requisitos do cliente ou do usuário final. Isso envolve entrevistas, análise de documentos e discussões para garantir que todos estejam alinhados quanto ao que o software deve fazer.

## Modelagem
O banco de dados contem apenas uma tabela chamada *carro* cuja estrutura é composta da seguinte forma:  
> id INT PK  
> modelo VARCHAR  
> cor VARCHAR  
> ano VARCHAR
  
### Postgresql
É necessário o uso de banco de dados *Postgresql* e editar o arquivo ***database.ini*** com seu usuário, senha e banco. 

## Implementação
A fase de implementação envolve a codificação real do software. Os desenvolvedores escrevem o código-fonte, testam e corrigem erros à medida que avançam. O sistema foi desenvolvido utilizando a linguagem de programação python para o *backend* e e a linguagem de programação javascript para o frontend. Os frameworks utilizados foram *fastApi* e *psycopg2*, para o *backend*, e React para o *frontend*.


## Configuração  
Para iniciar este projeto em ambiente local é preciso instalar as dependências localizadas em arquivos package.json e requirements.txt.
### python

Para instalar as dependências python acesse o caminho ``backend/`` e digite o seguinte comando no terminal:  
  
`pip install -r requirements.txt`  

### javascript  

Para instalar as dependências python acesse o caminho ``frontend/`` e digite o seguinte comando no terminal:  
  
`node install`  

***
