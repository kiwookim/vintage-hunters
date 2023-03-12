"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "CartItems";
		return queryInterface.bulkInsert(
			options,
			[
				{
					listingId: 3,
					cartId: 1,
				},
				{
					listingId: 4,
					cartId: 1,
				},
			],
			{}
		);
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = "CartItems";
		return queryInterface.bulkDelete(
			options,
			{
				cartId: { [Op.in]: [1] },
			},
			{}
		);
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
