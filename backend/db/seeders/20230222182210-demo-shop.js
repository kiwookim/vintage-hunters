"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "Shops";
		return queryInterface.bulkInsert(
			options,
			[
				{
					userId: 1,
					city: "Brooklyn",
					state: "NY",
					profileUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cL7I__td7Nfsz5ElpVdVcgHaHa%26pid%3DApi&f=1&ipt=fc8f0453d05d40dbd320d52930877d4a227f61d0ef93f0629da0f8429394da5e&ipo=images",
					bannerImgUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VoXO6QAJnMcud_Oig38WBQHaB2%26pid%3DApi&f=1&ipt=57ff4b15659cbb31bbbb5ba71280eabf6014a6351282c6f43c4d74084d1e4b8f&ipo=images",
					name: "Demo Shop",
					description:
						"I love all things vintage and I became a collector of cool instruments across categories",
				},
				{
					userId: 2,
					city: "Queens",
					state: "NY",
					profileUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cL7I__td7Nfsz5ElpVdVcgHaHa%26pid%3DApi&f=1&ipt=fc8f0453d05d40dbd320d52930877d4a227f61d0ef93f0629da0f8429394da5e&ipo=images",
					bannerImgUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VoXO6QAJnMcud_Oig38WBQHaB2%26pid%3DApi&f=1&ipt=57ff4b15659cbb31bbbb5ba71280eabf6014a6351282c6f43c4d74084d1e4b8f&ipo=images",
					name: "Marnie's Shop",
					description:
						"Thank you for visiting my shop. Please look around I have lot's of great vintage gears",
				},
				{
					userId: 3,
					city: "Long Island",
					state: "NY",
					profileUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cL7I__td7Nfsz5ElpVdVcgHaHa%26pid%3DApi&f=1&ipt=fc8f0453d05d40dbd320d52930877d4a227f61d0ef93f0629da0f8429394da5e&ipo=images",
					bannerImgUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VoXO6QAJnMcud_Oig38WBQHaB2%26pid%3DApi&f=1&ipt=57ff4b15659cbb31bbbb5ba71280eabf6014a6351282c6f43c4d74084d1e4b8f&ipo=images",
					name: "Bobbie's Shop",
					description:
						"I have great collection of vintage keyboards and pianos!!",
				},
				{
					userId: 4,
					city: "Seattle",
					state: "Washington",
					profileUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cL7I__td7Nfsz5ElpVdVcgHaHa%26pid%3DApi&f=1&ipt=fc8f0453d05d40dbd320d52930877d4a227f61d0ef93f0629da0f8429394da5e&ipo=images",
					bannerImgUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VoXO6QAJnMcud_Oig38WBQHaB2%26pid%3DApi&f=1&ipt=57ff4b15659cbb31bbbb5ba71280eabf6014a6351282c6f43c4d74084d1e4b8f&ipo=images",
					name: "Joe's Shop",
					description:
						"I have great collection of vintage saxophones. If you have the money I am your shop",
				},
				{
					userId: 5,
					city: "Los Angeles",
					state: "California",
					profileUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V4Q6OWbSOXlhwzBFQAFPdAHaKQ%26pid%3DApi&f=1&ipt=65d50949a637ff99389e6e86a9d9738943259c47349e27f590e0b8706a510eeb&ipo=images",
					bannerImgUrl:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VoXO6QAJnMcud_Oig38WBQHaB2%26pid%3DApi&f=1&ipt=57ff4b15659cbb31bbbb5ba71280eabf6014a6351282c6f43c4d74084d1e4b8f&ipo=images",
					name: "Pat's Shop",
					description:
						"I have great collection of vintage Gibsons, Fenders and more that has been used in many of my famous recordings. I am retiring",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = "Shops";
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				userId: { [Op.in]: [1, 2, 3, 4, 5] },
			},
			{}
		);
	},
};
