const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Cart, CartItem, Listing, Shop } = require("../../db/models");
const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
	// console.log("BACKEND ROUTE FOR GET MY CART");
	const currUserId = req.user.id;
	// console.log("currUserId", currUserId);
	const currCart = await Cart.findOne({
		where: {
			buyerId: currUserId,
		},
		include: [
			{
				model: Listing,
				attributes: ["id", "listingTitle", "listingPrice", "shippingCost"],
				include: [
					{
						model: Shop,
						attributes: ["city", "state", "name"],
					},
				],
			},
		],
	});
	console.log("CURRCART FOUND?", currCart.toJSON());
	const payload = [];
	for (let listing of currCart.Listings) {
		listing = listing.toJSON();
		console.log("-------------------------------", listing);
	}
});

module.exports = router;
