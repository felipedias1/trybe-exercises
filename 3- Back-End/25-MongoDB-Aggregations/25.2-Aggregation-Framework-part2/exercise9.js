// Exercício 9 : Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o pipeline do exercício 8.
db.vendas.aggregate([
  { 
    $match: {
      "dataVenda": { 
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31"),
      },
      status: "EM SEPARACAO",
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
         $add: ["$dataVenda",3*24*60*60*1000],
      },
    },  
  },
  {
    $project: {
      clienteId: 1, 
      dataVenda: 1, 
      dataEntregaPrevista: 1, 
      _id: 0,
    }
  },
  { 
    $group: {
      _id: null,
      maxData: { $max: "$dataEntregaPrevista" },
      minData: { $min: "$dataEntregaPrevista" },
    }
  },
  {
    $project: {
      _id: 0,
      diasDiferenca: {
        $ceil: {
          $divide: [
            { $subtract: ["$maxData","$minData"]},
            24*60*60*1000
          ]
        } 
      },
    },
  },
]);