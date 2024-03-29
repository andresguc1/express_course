import express from 'express';
import productsRouter from './products.router.js';
import categoriesRouter from './categories.router.js';
import usersRouter from './users.router.js';

const routerApi = (app) => {
  const router = express.Router();

  // Prefix all routes with '/api/v1'
  app.use('/api/v1', router);

  // Mount routers with their respective paths
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
};

export default routerApi;
