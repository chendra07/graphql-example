const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 40.99,
  },
  {
    id: "orangeshoe",
    description: "orange Shoe",
    price: 30.11,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductsById(id) {
  return products.filter((product) => {
    return product.id === id;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
};
