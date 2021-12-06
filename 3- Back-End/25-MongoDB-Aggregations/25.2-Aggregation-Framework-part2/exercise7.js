// Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:
db.vendas.aggregate([
  { $unwind: "$itens" },
  { $match: { "itens.nome": "QUEIJO PRATO" } },
  {
    $group: {
      _id: "$clienteId",
      "totalConsumido": { $sum: "$itens.quantidade" },
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'dados'
    }
  },
  { $unwind: "$dados" },
  {
    $project: {
      "nomeCliente": "$dados.nome",
      "uf": "$dados.endereco.uf",
      "totalConsumido": "$totalConsumido",
      _id: 0,
    }
  },
  { $sort: { totalConsumido: -1 } },
  { $limit: 1 }, 
]);
