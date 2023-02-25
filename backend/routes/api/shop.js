const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Shop, Listing } = require("../../db/models");
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
router.post("/", requireAuth, async (req, res) => {
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
router.put("/my/edit", requireAuth, async (req, res) => {
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
	console.log("INSIDE EDIT SHOP BACKEND ROUTE", editedShop.toJSON());
	return res.json(editedShop.toJSON());
});

module.exports = router;
