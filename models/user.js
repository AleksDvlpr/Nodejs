'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async getUser(id) {
      const user = await User.findAll({
        where: {
          id,
        },
      });

      return user;
    }

    static async updateUser(user, data) {
      await user.set({
        name: data.name || user.name,
        age: data.age || user.age,
        profession: data.profession || user.profession,
      });

      const userData = await user.save();

      return userData;
    }

    static async getUserByPk(id) {
      const user = await User.findByPk(id);

      if (user === null) {
        throw 404;
      }

      return user;
    }

    static async createUser(data) {
      const t = await sequelize.transaction();

      const user = await User.create(
        {
          name: data.name,
          age: data.age,
          profession: data.profession,
        },
        { transaction: t },
      );

      await t.commit();

      return user;
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      profession: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
