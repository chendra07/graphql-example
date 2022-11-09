const orders = [
  {
    date: "2006-05-05",
    subtotal: 62.22,
    items: [
      {
        product: {
          id: "orangeshoe",
          description: "old orange shoe",
          price: 31.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
