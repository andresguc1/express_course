import express from 'express';
import productsRouter from './products.router.js'; // Make sure to specify the file extension
import fakerRouter from './fakerProduct.router.js'; // Make sure to specify the file extension
import categoriesRouter from './categories.router.js'; // Make sure to specify the file extension
import usersRouter from './users.router.js'; // Make sure to specify the file extension

const routerApi = (app) => {
  app.use('/products', productsRouter);
  app.use('/fakerProducts', fakerRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

export default routerApi;
