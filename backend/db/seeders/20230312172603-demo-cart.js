"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "Carts";
		return queryInterface.bulkInsert(
			options,
			[
				{
					buyerId: 1,
				},
				{
					buyerId: 2,
				},
				{
					buyerId: 3,
				},
				{
					buyerId: 4,
				},
				{
					buyerId: 5,
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
		options.tableName = "Carts";
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				buyerId: {
					[Op.in]: [1, 2, 3, 4, 5],
				},
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
