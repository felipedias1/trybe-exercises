// Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
              { $subtract: ["$$NOW","$dataNascimento"] },
              { $multiply: [24*60*60*1000, 365] },
            ],
          },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    },
  },
  { 
    $match: {
      "compras.dataVenda": { 
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      }
    }
  },
  { $unwind: "$compras" },
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 5 },
]);