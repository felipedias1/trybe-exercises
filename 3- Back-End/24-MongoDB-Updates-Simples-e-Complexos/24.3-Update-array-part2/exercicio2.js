// 2- Agora retorne os filmes que contenham action no 
// array category e possuem nota do IMDB maior do que 7 .
db.movies.find(
  { 
    category: { $all: ["action", "adventure"] },
    imdbRating: {$gt: 7 } 
  }
);