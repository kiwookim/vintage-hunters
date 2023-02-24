const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");
const { ValidationError } = require("sequelize");

const validateCreateListing = [
	check("brandName")
		.isLength({ max: 60 })
		.withMessage("brand name must be 60 characters or less"),
	check("model")
		.isLength({ max: 100 })
		.withMessage("model must be 100 characters or less"),
	check("year")
		.isLength({ max: 60 })
		.withMessage("year must be less than 60 characters"),
	check("listingTitle")
		.isLength({ min: 10 })
		.withMessage("listing title must be greater than 10 characters")
		.isLength({ max: 120 })
		.withMessage("listing title must be less than 120 characters"),
	check("description")
		.isLength({ min: 50 })
		.withMessage("description must be 50 characters or more"),
	handleValidationErrors,
];

module.exports = { validateCreateListing };
