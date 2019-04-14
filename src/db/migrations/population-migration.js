export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Population', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    femaleResidents: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    maleResidents: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    totalResidents: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: queryInterface => queryInterface.dropTable('Population'),
};
