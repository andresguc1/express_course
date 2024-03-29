import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'products 1',
      price: 1000,
    },
    {
      id: 2,
      name: 'product 2',
      price: 2000,
    },
  ]);
});

router.get('/filter', (req, res) => {
  res.send("I'm a filter");
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 2000,
  });
});

export default router;
