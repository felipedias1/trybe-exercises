// Exercício 1 : Altere o imdbRating para 7.7 no filme Batman
db.movies.update(
  { title: "Batman" },
  { $set: {
      imdbRating: 7.7,
    }
  }
)