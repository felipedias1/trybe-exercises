db.superheroes.find(
  { "aspects.hairColor": 
    {$not: 
        {$in: ["No Hair","Black"]}
    }
});