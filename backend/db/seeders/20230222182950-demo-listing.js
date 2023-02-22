"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "Listings";
		return queryInterface.bulkInsert(
			options,
			[
				{
					shopId: 1,
					brandName: "Fender",
					model: "American Professional II Stratocaster with Maple Fretboard",
					year: 1973,
					originCountry: "U.S",
					category: "Guitars",
					listingTitle:
						"Fender American Professional II Stratocaster in Miami Blue",
					listingPrice: 1488,
					condition: "Used-Mint",
					description:
						"The American Professional II Stratocaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today's working player.",
					shippingCost: 35,
					returnPolicy: "14 days",
					localPickUp: true,
					acceptOffers: true,
				},
				{
					shopId: 2,
					brandName: "Selmer",
					model: "Mark VI Tenor Sax",
					year: 1970,
					originCountry: "France",
					category: "Horns",
					listingTitle:
						"Vintage Selmer Paris Original Lacquer Mark VI Tenor Sax, Serial #214963",
					listingPrice: 5995,
					condition: "Used-Good",
					description:
						"This is a vintage Selmer Paris Mark VI tenor saxophone from the 1970's in original lacquer finish, serial number 214963. This tenor plays with a rich response while featuring a beautiful blend of complexity and warmth in its sound. The excellent balance across all registers allows for a superb amount of control and flexibility. This tenor can be played with an ultra warm sub tone and can also be pushed hard when desired. The key work feels fluid under the fingers allowing for a very comfortable experience. ",
					shippingCost: 35,
					returnPolicy: "14 days",
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 3,
					brandName: "Yamaha",
					model: "S90 XS 88-key Master Keyboard",
					year: 2010,
					originCountry: "Japan",
					category: "Keyboards",
					listingTitle: "Yamaha S90 XS 88-weighted keys Keyboard",
					listingPrice: 1300,
					condition: "Used-Excellent",
					description:
						"Just serviced, usual nicks for a used instrument. Everything works and the keyboard sounds and plays amazing. New keys and knobs and electronics were cleaned and serviced to factory specs. Price not negotiable",
					shippingCost: 35,
					returnPolicy: "30 days",
					localPickUp: true,
					acceptOffers: false,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = "Listings";
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				shopId: { [Op.in]: [1, 2, 3] },
			},
			{}
		);
	},
};
