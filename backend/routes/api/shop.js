const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Shop, Listing } = require("../../db/models");
const router = express.Router();

router.get("/my", async (req, res) => {
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
	console.log(city, state, name, description);
	// const myShop = await Shop.create({
	// 	userId: currUserId,
	// 	city,
	// 	state,
	// 	profileUrl,
	// 	bannerImgUrl,
	// 	name,
	// 	description,
	// });
	// return res.json(myShop);
});

module.exports = router;
