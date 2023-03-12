"use strict";
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"CartItems",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				listingId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: "Listings",
					},
				},
				cartId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: "Carts",
					},
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
		options.tableName = "CartItems";
		return queryInterface.dropTable(options);
	},
};
