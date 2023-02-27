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
				{
					listingId: 4,
					url: "https://images.reverb.com/image/upload/s--xvGULD0L--/t_card-square/v1656731162/yhof8ccfcijzvj3irtpt.jpg",
					preview: true,
				},
				{
					listingId: 5,
					url: "https://images.reverb.com/image/upload/s--kMwqHbY3--/a_270/f_auto,t_large/v1676847889/efodmupwaluqfyf8yfmn.jpg",
					preview: true,
				},
				{
					listingId: 6,
					url: "https://images.reverb.com/image/upload/s--I5kE-_QS--/a_0/f_auto,t_large/v1677338582/wc2nrczn1v4gpumnhu4k.jpg",
					preview: true,
				},
				{
					listingId: 7,
					url: "https://www.saxquest.com/uploads/images/products/product_detail/16229121361MarkVISop%20(2).jpg",
					preview: true,
				},
				{
					listingId: 8,
					url: "https://images.reverb.com/image/upload/s--cpyQrJea--/a_0/f_auto,t_large/v1675712871/srb6y1njnu9uwd5az3qd.jpg",
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
				listingId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
			},
			{}
		);
	},
};
