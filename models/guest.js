import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
// const sequelize = require('../config/sequelize');

const Guest = sequelize.define('Guest', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomor_telepon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  catatan: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Guest;
