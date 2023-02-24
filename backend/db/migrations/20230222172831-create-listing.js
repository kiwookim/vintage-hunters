"use strict";
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Listings",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				shopId: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				brandName: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				model: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				year: {
					type: Sequelize.STRING,
					allowNull: true,
				},
				originCountry: {
					type: Sequelize.STRING,
					allowNull: true,
				},
				category: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				listingTitle: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				listingPrice: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				condition: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: false,
				},
				shippingCost: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				returnPolicy: {
					type: Sequelize.ENUM("14 days", "30 days"),
					allowNull: false,
				},
				localPickUp: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
				},
				acceptOffers: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
			},
			options
		);
	},
	down: async (queryInterface, Sequelize) => {
		options.tableName = "Listings";
		return queryInterface.dropTable(options);
	},
};
