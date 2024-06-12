
const { Model, DataTypes } = require('sequelize');

class Customer extends Model {}

Customer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Customer'
});

module.exports = Customer;

