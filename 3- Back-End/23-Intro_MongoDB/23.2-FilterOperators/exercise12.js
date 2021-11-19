db.superheroes.find(
  { "aspects.height": { $not:{$gt: 180}}}
);