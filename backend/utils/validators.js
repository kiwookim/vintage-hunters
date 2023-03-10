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
		.withMessage("description must be 50 characters or more")
		.isLength({ max: 300 })
		.withMessage("product description must be less than 300 characters"),
	check("listingPrice")
		.custom((value, { req }) => {
			const price = req.body.listingPrice;
			if (price.toString().includes(".")) {
				throw new ValidationError("please round your price up or down");
			}
			return true;
		})
		.custom((value, { req }) => {
			const price = req.body.listingPrice;
			if (price <= 0) {
				throw new ValidationError("price cannot be 0 or negative number");
			}
			return true;
		}),
	check("shippingCost").custom((value, { req }) => {
		const price = req.body.shippingCost;
		if (price < 0) {
			throw new ValidationError("shipping cost cannot be a negative number");
		}
		if (price.toString().includes(".")) {
			throw new ValidationError("please round your shipping cost up or down");
		}
		return true;
	}),

	handleValidationErrors,
];
const validateCreateShop = [
	check("name")
		.isLength({ max: 40 })
		.withMessage("Shop name must be 40 characters or less"),
	check("description")
		.isLength({ min: 50 })
		.withMessage("shop description must be 50 characters or more")
		.isLength({ max: 250 })
		.withMessage("shop description must be less than 250 character"),

	handleValidationErrors,
];
module.exports = { validateCreateListing, validateCreateShop };
