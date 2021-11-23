// Exercício 20 : Em apenas uma query, adicione o campo 
// areas com ["Outside"] a todos os Junior Staff que não 
// tenham o campo areas definido.
db.xmen.updateMany(
  {
    "occupation": "Junior Staff",
    areas: { $exists: false },
  },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Outside"] }
  }
)