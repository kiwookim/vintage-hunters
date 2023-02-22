"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "ListingImages";
		return queryInterface.bulkInsert(
			options,
			[
				{
					listingId: 1,
					url: "https://images.reverb.com/image/upload/s--r6tmGvz6--/t_card-square/v1676983332/vrehu4l9iux9989ofrpb.jpg",
					preview: true,
				},
				{
					listingId: 2,
					url: "https://www.saxquest.com/uploads/images/products/product_detail/16344214963MarkVITen%20(2).jpg",
					preview: true,
				},
				{
					listingId: 3,
					url: "https://images.reverb.com/image/upload/s--T-24TtXY--/a_0/f_auto,t_large/v1632175447/o6zpk4fj9n5zx4bi6tmv.jpg",
					preview: true,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = "ListingImages";
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				listingId: { [Op.in]: [1, 2, 3] },
			},
			{}
		);
	},
};
