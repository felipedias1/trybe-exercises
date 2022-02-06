const express = require('express');
const router = express.Router();
const { Book } = require('../models')

router.post(
  '/', 
  async (req, res) => {
    try {
      const { title, author, pageQuantity = 0 } = req.body;
  
      const book = await Book.create({
        title,
        author,
        pageQuantity,
      });
  
      res.status(201);
      res.json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

 router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

 router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});



router.post('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200);
    res.json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );
    if(!deleteBook) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
