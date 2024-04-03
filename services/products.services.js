import faker from 'faker';

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
      throw new Error('Product not found');
    }
    return product;
  }

  update() {}

  delete() {}
}

export default ProductServices;
