const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: async () => {
      console.log("getting products...");
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return productsModel.getProductsById(args.id);
    },
  },
};
