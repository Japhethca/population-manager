export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Location', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    femaleResidents: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    maleResidents: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    totalResidents: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: queryInterface => queryInterface.dropTable('Location'),
};
