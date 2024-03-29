const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world from my Express Server');
});

app.get('/new-route', (req, res) => {
  res.send('This is the endpoint /new-route');
});

app.get('/products', (req, res) => {
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 2000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Server port: ' + port);
});
