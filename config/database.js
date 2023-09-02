import { Sequelize } from 'sequelize';

const database = new Sequelize('merkler', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, // Nonaktifkan pembuatan kolom createdAt dan updatedAt
  },
});

export default database;


