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
  Mutation: {
    addNewProduct: (_, args) => {
      // console.log("args: ", args);
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
