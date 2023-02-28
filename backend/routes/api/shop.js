const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Shop, Listing, ListingImage } = require("../../db/models");
const { validateCreateShop } = require("../../utils/validators");
const router = express.Router();

router.get("/my", requireAuth, async (req, res) => {
	console.log("in the backend route(myshop)");
	const currUserId = req.user.id;
	const myShop = await Shop.findOne({
		where: {
			userId: currUserId,
		},
		include: [{ model: Listing }],
	});
	if (!myShop) return res.json({});
	return res.json(myShop);
});
router.get("/:shopId", requireAuth, async (req, res) => {
	const { shopId } = req.params;
	console.log("shopId in the backend", shopId);
	const thisShop = await Shop.findByPk(Number(shopId), {
		include: [{ model: Listing }],
	});
	return res.json(thisShop);
});
//get all listings by shop
router.get("/:shopId/listings", requireAuth, async (req, res) => {
	const { shopId } = req.params;
	const payload = [];
	// const listingsByShop = await Listing.findAll({
	// 	where: {
	// 		shopId: Number(shopId),
	// 	},
	// 	include: [{ model: ListingImage }],
	// });
	// console.log("BACEKDN");
	// console.log(listingsByShop);
	// for (let listing of listingsByShop) {
	// 	payload.push(listing);
	// }
	// console.log(payload);
	// return res.json(payload);
	const listingsByShop = await Listing.findAll({
		where: {
			shopId: Number(shopId),
		},
	});
	for (let listing of listingsByShop) {
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

router.post("/", requireAuth, validateCreateShop, async (req, res) => {
	const currUserId = req.user.id;
	const { city, state, profileUrl, bannerImgUrl, name, description } = req.body;

	const myShop = await Shop.create({
		userId: currUserId,
		city,
		state,
		profileUrl:
			profileUrl === ""
				? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Cl56H6WgxJ8npVqyhefTdQHaHa%26pid%3DApi&f=1&ipt=11e91deec8c46277a423de237d3e38748d21acf60fd2cbb378f9ea8b944f1363&ipo=images"
				: profileUrl,
		bannerImgUrl,
		name,
		description,
	});
	return res.json(myShop);
});
//edit myshop
router.put("/my/edit", requireAuth, validateCreateShop, async (req, res) => {
	const currUserId = req.user.id;
	const { city, state, profileUrl, bannerImgUrl, name, description } = req.body;
	const myShop = await Shop.findOne({
		where: {
			userId: currUserId,
		},
		include: [{ model: Listing }],
	});
	const editedShop = await myShop.update({
		city,
		state,
		profileUrl,
		bannerImgUrl,
		name,
		description,
	});
	console.log("BACNEND ROUTE", editedShop.toJSON());
	// console.log("INSIDE EDIT SHOP BACKEND ROUTE", editedShop.toJSON());
	return res.json(editedShop);
});

module.exports = router;
