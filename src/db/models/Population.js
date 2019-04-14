export default (sequelize, DataTypes) => {
  const Population = sequelize.define('Population', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
    },
    maleResidents: {
      type: DataTypes.STRING,
    },
    femaleResidents: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    totalResidents: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {});

  Population.associate = () => {
  };
  return Population;
};
