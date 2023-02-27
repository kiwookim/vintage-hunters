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
					year: "1973",
					originCountry: "U.S",
					category: "Guitars",
					listingTitle:
						"Fender American Professional II Stratocaster in Miami Blue",
					listingPrice: 1488,
					condition: "Mint",
					description:
						"The American Professional II Stratocaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today's working player.",
					shippingCost: 35,
					returnPolicy: "14 days",
					localPickUp: true,
					acceptOffers: true,
				},
				{
					shopId: 4,
					brandName: "Selmer",
					model: "Mark VI Tenor Sax",
					year: "1970",
					originCountry: "France",
					category: "Band and Orchestra",
					listingTitle:
						"Vintage Selmer Paris Original Lacquer Mark VI Tenor Sax, Serial #214963",
					listingPrice: 5995,
					condition: "Good",
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
					year: "2010",
					originCountry: "Japan",
					category: "Keyboards and Synths",
					listingTitle: "Yamaha S90 XS 88-weighted keys Keyboard",
					listingPrice: 1300,
					condition: "Excellent",
					description:
						"Just serviced, usual nicks for a used instrument. Everything works and the keyboard sounds and plays amazing. New keys and knobs and electronics were cleaned and serviced to factory specs. Price not negotiable",
					shippingCost: 35,
					returnPolicy: "30 days",
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 2,
					brandName: "Sequential",
					model: "Prophet 600 61-Key 6-Voice Polyphonic Synthesizer",
					year: "1982",
					originCountry: "United States",
					category: "Keyboards and Synths",
					listingTitle:
						"Sequential Circuits Prophet 600 Vintage Analog Synthesizer-  Near MINT • Fully Restored • Warranty",
					listingPrice: 2490,
					condition: "Mint",
					description:
						"Unit has been fully serviced and get our very tough seal of approval. This is one of the best looking Prophet 600s I have seen since the 1980s!!",
					shippingCost: 79,
					returnPolicy: "30 days",
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 5,
					brandName: "Fender",
					model: "Mustang Guitar with Rosewood Fretboard",
					year: "1966",
					originCountry: "United States",
					category: "Guitars",
					listingTitle:
						"1966 Fender Mustang Guitar Dakota Red with Rosewood Fretboard",
					listingPrice: 1300,
					condition: "Good",
					description:
						"Serial number 148103. Electronics works perfectly. Frets still have life left in them. It comes with original case",
					shippingCost: 150,
					returnPolicy: "14 days",
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 1,
					brandName: "Focusrite",
					model: "ISA One Destop Mic Preamp",
					year: "2008-present",
					originCountry: "United Kingdom",
					category: "Audio",
					listingTitle: "Focusrite ISA One Destop Mic Preamp",
					listingPrice: 475,
					condition: "Mint",
					description:
						"I love the additional DI that runs completely separately. So much control and that ISA sound is killer",
					shippingCost: 0,
					returnPolicy: "14 days",
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 4,
					brandName: "Selmer",
					model: "Selmer Paris Mark VI Soprano",
					year: "1964",
					originCountry: "France",
					category: "Band and Orchestra",
					listingTitle:
						"Selmer Paris Original Silver Plate Mark VI Soprana, Serial #121361",
					listingPrice: 7595,
					condition: "Good",
					description:
						"This is a Selmer Paris Mark VI soprano saxophone in original silver plate, serial number 121361. It was manufactured in 1964 and is in beautiful condition. This is a very smooth player. It has an ultra fast intake of air and responds with a very crisp brilliant sonic character. ",
					shippingCost: 0,
					returnPolicy: "14 days",
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 3,
					brandName: "Fender",
					model: "Rhodes Piano Bass",
					year: "1970-1974",
					originCountry: "United States",
					category: "Keyboards",
					listingTitle: "Fender Rhodes Piano Bass -1970-1974- Black",
					listingPrice: 3000,
					condition: "Excellent",
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
				shopId: { [Op.in]: [1, 2, 3, 4, 5] },
			},
			{}
		);
	},
};
