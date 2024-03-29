import express from 'express';
import faker from 'faker'

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

app.get('/fakerProducts', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("Don't params sended");
  }
});

app.listen(port, () => {
  console.log('Server port: ' + port);
});
