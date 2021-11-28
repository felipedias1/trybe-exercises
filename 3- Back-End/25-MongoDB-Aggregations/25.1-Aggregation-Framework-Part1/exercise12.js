db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-12-31"),
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
      totalCompras: {
        $sum: 1
      }
    }
  },
  { $sort: { totalCompras: -1 } },
  { $limit: 3 },
  { $unwind: "$_id" },
  { 
    $project: { 
      "totalVendas":"$totalCompras",
      "uf": "$_id",
       _id: 0,

    } 
  }
]);