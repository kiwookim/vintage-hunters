const express = require("express");
const { requireAuth } = require("../../utils/auth");
const {
	Cart,
	CartItem,
	Listing,
	Shop,
	ListingImage,
} = require("../../db/models");
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
					{
						model: ListingImage,
					},
				],
			},
		],
	});
	// console.log("CURRCART FOUND", currCart.toJSON());
	const payload = [];
	for (let listing of currCart.Listings) {
		listing = listing.toJSON();
		// listing.imgURL = [...listing.ListingImages][0].url;

		// console.log("listing---------------------", listing);
		payload.push(listing);
	}
	// console.log("PAYLOAD----to FE", payload);
	return res.json(payload);
});

module.exports = router;
