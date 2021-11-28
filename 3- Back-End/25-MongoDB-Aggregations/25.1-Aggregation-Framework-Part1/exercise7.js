// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
db.clientes.aggregate([
  { $group: { 
      _id: { sexo: "$sexo", estado: "$endereco.uf" },
      total: { $sum: 1 },
    } 
  },
  {$project: { 
    estado: "$_id.estado", 
    sexo: "$_id.sexo",
    total: "$total",
    _id: 0, },
  },
]);