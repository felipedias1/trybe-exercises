db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31"),
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "dadosCliente"
    }
  },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalCompras: { $sum: 1 },
    }
  },
  { $sort: { _id: -1 } },
  { $unwind: "$_id" },
  { 
    $project: { 
      "uf": "$_id",
      mediaVendas: "$mediaVendas",
      "totalVendas":"$totalCompras",
      _id: 0,
    } 
  }
]);