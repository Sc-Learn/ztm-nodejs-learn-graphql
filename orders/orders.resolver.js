const ordersModel = require('./orders.model');

module.exports = {
  Query: {
    orders: async () => {
      return ordersModel.getAllOrders();
    }
  }
}