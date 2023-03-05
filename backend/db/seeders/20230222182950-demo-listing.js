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
				{
					shopId: 1,
					brandName: "Fender",
					model: "Dual Showman Reverb",
					year: "1972",
					originCountry: "United States",
					category: "Amps",
					listingTitle:
						"Fender Dual Showman Reverb 1972 - Minty Silverface Head",
					listingPrice: 1676,
					condition: "Excellent",
					description:
						"I installed 2 matching 6L6s since I like to play loud. Anyhow, he said he had serviced the amp, gone all through it replacing any caps that were suspicious, etc. Bottom line, it sounds great!",
					returnPolicy: "30 days",
					shippingCost: 135,
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 1,
					brandName: "Marshall",
					model: "JMP 1987 MKII 2-Channel 50-Watt Guitar Amp Head",
					year: "1987",
					originCountry: "United Kingdom",
					category: "Amps",
					listingTitle: "Marshall MK II 50 watt 1976-Black",
					listingPrice: 2350,
					condition: "Mint",
					description:
						"1976 Marshall 50 Watt MKII Amplifier. I have owned this amplifier for about 12 years. During the time that I have owned it there have been no modifications performed",
					returnPolicy: "14 days",
					shippingCost: 135,
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 2,
					brandName: "Metjazz",
					model: "Metjazz Drum Kit",
					year: "1950",
					originCountry: "France",
					category: "Drums and Percussion",
					listingTitle:
						"Vintage Metjazz 1950 jazz drum kit. White marine pearl flat base hardware",
					listingPrice: 2770,
					condition: "Mint",
					description:
						"Incredibly clean. Museum state. Hard to find a better manufactured drum. All pictured is included in this auction. Flatbase hardware (Olympic as proposed from factory) , and the 4 shells (snare, tom 1, floor tom, bass drum).",
					returnPolicy: "14 days",
					shippingCost: 350,
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 2,
					brandName: "Ludwig",
					model: "Top Hat and Cane Swing Sensation",
					year: "1941",
					originCountry: "United States",
					category: "Drums and Percussion",
					listingTitle:
						"Ludwig and Ludwig 1941 Original Top Hat and Cane, Swing Sensation Drum Set",
					listingPrice: 13995,
					condition: "Good",
					description:
						"The Ludwig Top Hat and Cane model set is considered by collectors to be the rarest and most sought after production drum set ever made. This model was produced for less than 2 years in 1940 and 41. It was considered to be the absolute pinnacle of the drum set industry at the time",
					returnPolicy: "14 days",
					shippingCost: 200,
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 2,
					brandName: "Fulltone",
					model: "Choralflange",
					year: "2000s",
					originCountry: "United States",
					category: "Effects and Pedals",
					listingTitle: "Fulltone Choralflange 2006-Green/Silver",
					listingPrice: 275,
					condition: "Good",
					description:
						"Purchased new in 2006, and used on gigging pedalboard for a couple of years. A few small scratches and dings in control panel (pictured). Fully functional. 9 volt adapter not included.",
					returnPolicy: "30 days",
					shippingCost: 0,
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 2,
					brandName: "Source Audio",
					model: "SA262 Ventris Dual Reverb",
					year: "2010s",
					originCountry: "United States",
					category: "Effects and Pedals",
					listingTitle: "Ventris Dual Reverb - Brushed Anodized Aluminum",
					listingPrice: 320,
					condition: "Excellent",
					description:
						"Amazing dual reverb pedal. Excellent condition, will ship promptly via UPS. Sad to let this one go. It's a great pedal!",
					returnPolicy: "30 days",
					shippingCost: 0,
					localPickUp: true,
					acceptOffers: false,
				},
				{
					shopId: 1,
					brandName: "Tascam",
					model: "464 Portastudio 4-Track Cassette Recorder",
					year: "vintage",
					originCountry: "Japan",
					category: "Audio",
					listingTitle:
						"TASCAM Portastudio 464 vintage 4 track Multitrack Cassette Tape Recorder",
					listingPrice: 599,
					condition: "Good",
					shippingCost: 15,
					description:
						"The Tascam 464 is a Portastudio designed to record 4 tracks onto a standard cassette. It features a built in mixer with three bands of EQ on each channel, XLR inputs on channels 1-4, and 1/4' inputs for the other inputs.",
					returnPolicy: "14 days",
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
