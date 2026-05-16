const userModel = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
  });
  return user;
};

module.exports = userModel;
