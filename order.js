const { Model, DataTypes } = require('sequelize');

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  amount: DataTypes.FLOAT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'customers',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Order'
});

module.exports = Order;




