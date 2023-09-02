import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, //setiap username adalah unik
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Admin;
