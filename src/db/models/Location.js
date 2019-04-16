export default (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    maleResidents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    femaleResidents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalResidents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get() {
        const males = this.getDataValue('maleResidents');
        const females = this.getDataValue('femaleResidents');

        return males + females;
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Location.associate = () => {
  };
  return Location;
};
