"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "Users";
		return queryInterface.bulkInsert(
			options,
			[
				{
					email: "demo@aa.io",
					username: "Demo",
					hashedPassword: bcrypt.hashSync("password"),
					firstName: "Demo",
					lastName: "Lition",
				},
				{
					email: "marnie@aa.io",
					username: "Marnie",
					hashedPassword: bcrypt.hashSync("password"),
					firstName: "Marnie",
					lastName: "Lee",
				},
				{
					email: "bobbie@aa.io",
					username: "Bobbie",
					hashedPassword: bcrypt.hashSync("password"),
					firstName: "Bobbie",
					lastName: "Rodriguez",
				},
				{
					email: "joe@aa.io",
					username: "joehenderson",
					hashedPassword: bcrypt.hashSync("password"),
					firstName: "Joe",
					lastName: "Henderson",
				},
				{
					email: "pat@aa.io",
					username: "patmetheny",
					hashedPassword: bcrypt.hashSync("password"),
					firstName: "Pat",
					lastName: "Metheny",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = "Users";
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				username: {
					[Op.in]: ["Demo", "Marnie", "Bobbie", "joehenderson", "patmetheny"],
				},
			},
			{}
		);
	},
};
