const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Listing, ListingImage } = require("../../db/models");
const router = express.Router();

//get all listings for HomePage
router.get("/", async (req, res) => {
	const payload = [];
	const allListings = await Listing.findAll();
	for (let listing of allListings) {
		listing = listing.toJSON();
		let previewUrl = await ListingImage.findAll({
			where: {
				listingId: listing.id,
				preview: true,
			},
		});
		const lastPreviewImg = previewUrl[previewUrl.length - 1];
		if (previewUrl.length) {
			listing.PreviewImage = lastPreviewImg.url;
		} else {
			listing.PreviewImage = "N/A";
		}
		payload.push(listing);
	}
	return res.json({ Listings: payload });
});
//create listing
router.post("/new", async (req, res) => {
	console.log("BACKEND: REQUEST BODY", req.body);
});

module.exports = router;
