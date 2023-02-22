"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Shop extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Shop.belongsTo(models.User, {
				foreignKey: "userId",
			});
			//Shop has many Listings (One --> Many)
			Shop.hasMany(models.Listing, {
				foreignKey: "shopId",
			});
		}
	}
	Shop.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			userId: { type: DataTypes.INTEGER, allowNull: false },
			city: { type: DataTypes.STRING, allowNull: false },
			state: { type: DataTypes.STRING, allowNull: false },
			profileUrl: { type: DataTypes.STRING, allowNull: true },
			bannerImgUrl: { type: DataTypes.STRING, allowNull: true },
			name: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false },
		},
		{
			sequelize,
			modelName: "Shop",
		}
	);
	return Shop;
};
