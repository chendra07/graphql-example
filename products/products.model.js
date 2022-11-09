const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 40.99,
    reviews: [],
  },
  {
    id: "orangeshoe",
    description: "orange Shoe",
    price: 30.11,
    reviews: [],
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
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductsById(id);

  if (matchedProduct) {
    const productReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(productReview);

    return productReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewProductReview,
};
