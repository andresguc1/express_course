import express from 'express';
import ProductServices from '../services/products.services.js';
import validatorHandler from '../middlewares/validatorHandler.js';
import { createProductSchema, updateProductSchema, getProductSchema } from '../schemas/product.schema';

const router = express.Router();
const service = new ProductServices();

router.get('/', (req, res, next) => {
  try {
    const products = service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/filter', (req, res) => {
  // Implement logic for filtering products
  res.send('Filtering logic will be implemented here');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = service.findOne(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema),
  async (req, res, next) => {
    try {
      const createdProduct = await service.create(req.body);
      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(updateProductSchema),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedProduct = await service.update(id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await service.delete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted', deletedProduct });
  } catch (error) {
    next(error);
  }
});

export default router;
