export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Location', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        msg: 'Location name is required',
      },
    },
    femaleResidents: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        msg: 'Number of female residents is required',
      },
    },
    maleResidents: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        msg: 'Number of male residents is required',
      },
    },
    totalResidents: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    relatedLocationId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Location',
        as: 'subLocations',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: queryInterface => queryInterface.dropTable('Location'),
};
