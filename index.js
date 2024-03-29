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
  res.json({
    name: 'product1',
    price: '100'
  });
});

app.listen(port, () => {
  console.log('Server port: ' + port);
});
