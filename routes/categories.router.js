import express from 'express';

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

export default router;
