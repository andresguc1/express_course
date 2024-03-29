import express from 'express';
import routerApi from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world from my Express Server');
});

app.get('/new-route', (req, res) => {
  res.send('This is the endpoint /new-route');
});

app.listen(port, () => {
  console.log('Server port: ' + port);
});

routerApi(app);
