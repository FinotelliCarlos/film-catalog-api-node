# 🎥 Node API - Catálogo de Filmes

Está API trás um catálogo de filmes aonde está disponibilizado a qualquer fonte de busca.

### 🔗 Referência da API


#### 📒 Para buscar todos os items


```http

  GET https://filmcatalogapinode.herokuapp.com/films
  
```


#### 📒 Para buscar somente um item


```http

  GET https://filmcatalogapinode.herokuapp.com/films/${id}

```

#### 📒 Ao fazer a busca o retorno deverá ser como abaixo


```bash

{
  "docs": [
  {
  "_id": "62f00b7d117a4112c7390c10",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "__v": 0
  },
  ...
],
"total": 22,
"limit": 10,
"page": 1,
"pages": 3
}

```


### ⚙ Para executar na própria maquina


```bash

# Clonar o repositório
git clone https://github.com/FinotelliCarlos/film-catalog-api-node

# Entrar no diretório
cd film-catalog-api-node

# Baixar as dependências
npm install

```

#### 👟 Para iniciar o projeto será necerrario realizar alguns passos

#### 🧾 Criar uma conta em **_cloud.mongodb.com_**

- [MongoDB Atlas](https://cloud.mongodb.com/)

#### 🧾 Criar uma base de Dados

- Create > Shared > Create Cluster

### 🧾 Crie seu usuario e senha que serão os que vão ser utilizados em sua .env

### 🧾 No arquivo app.js configure corretamente o link de conecção ao banco de dados

- Connect > Connect your application > Copie o link e substitua com as suas propriedades

```js
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@NOMEDOSEUCLUSTER.IDREF.mongodb.net/?retryWrites=true&w=majority`
)
```

#### 🧾 Criar um arquivo .env com as variaveis solicitadas para conecção com o banco de dados

```
.env

DB_USER="SeuUsuario"
DB_USER_PASS="SuaSenhaDeUsuario"

```

#### ⚙ Após isto está pronto para iniciar a API

```bash

# Executar o servidor
npm run start | yarn start

```
