import faker from 'faker';
import Boom from '@hapi/boom';

class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw Boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw Boom.conflict('Product is block');
    }
    return product;
  }

  update() {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw Boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw Boom.notFound('product not found');
    }
  }
}

export default ProductServices;
