"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Listing extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			//Listings can belong to ONE shop(Many ---> One(shop))
			Listing.belongsTo(models.Shop, { foreignKey: "shopId" });
			//Listing can have MANY images
			Listing.hasMany(models.ListingImage, { foreignKey: "listingId" });
		}
	}
	Listing.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			shopId: { type: DataTypes.INTEGER, allowNull: false },
			brandName: { type: DataTypes.STRING, allowNull: false },
			model: { type: DataTypes.STRING, allowNull: false },
			year: { type: DataTypes.INTEGER, allowNull: false },
			originCountry: { type: DataTypes.STRING, allowNull: true },
			category: { type: DataTypes.STRING, allowNull: false },
			listingTitle: { type: DataTypes.STRING, allowNull: false },
			listingPrice: { type: DataTypes.INTEGER, allowNull: false },
			condition: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false },
			shippingCost: { type: DataTypes.INTEGER, allowNull: false },
			returnPolicy: {
				type: DataTypes.ENUM("14 days", "30 days"),
				allowNull: false,
			},
			localPickUp: { type: DataTypes.BOOLEAN, allowNull: false },
			acceptOffers: { type: DataTypes.BOOLEAN, allowNull: false },
		},
		{
			sequelize,
			modelName: "Listing",
		}
	);
	return Listing;
};
