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
      validate: {
        notEmpty: {
          args: true,
          msg: 'Location name is required',
          min: 2,
        },
      },
    },
    maleResidents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Number of male residents is required',
        },
      },
    },
    femaleResidents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Number of female residents is required',
        },
      },
    },
    totalResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      get() {
        const males = this.getDataValue('maleResidents');
        const females = this.getDataValue('femaleResidents');
        return males + females;
      },
    },
    relatedLocationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      as: 'subLocations',
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Location.associate = (models) => {
    models.Location.hasMany(models.Location, {
      as: 'subLocations',
      foreignKey: 'relatedLocationId',
    },
    {
      onDelete: 'CASCADE',
    });
  };
  return Location;
};
