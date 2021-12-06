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
]);