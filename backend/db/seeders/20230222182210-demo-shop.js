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
					description: "This is my shop. I have great vintage instruments",
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
					description: "I have great collection of vintage Selmer saxophones!",
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
					description: "I have great collection of vintage Yamaha pianos!!",
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
				userId: { [Op.in]: [1, 2, 3] },
			},
			{}
		);
	},
};
