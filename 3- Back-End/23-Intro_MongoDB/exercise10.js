db.books.find(
{
  status: "MEAP"
},
{
  title: 1, 
  authors: 1, 
  status: 1
})
  .limit(10);