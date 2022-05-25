
# Conselhos Diários

Projeto para praticar JavaScript puro, requisições HTTPs e a criação de API Rest com JSON Server.


## API
No diretório da API:
```http
  json-server --watch server.json
```
#### Retorna todos os itens


```http
  GET /data
```

#### Retorna um item

```http
  GET /data/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | Com o id Retorna o Item que quer |


