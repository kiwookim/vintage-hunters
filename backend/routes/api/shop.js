const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Shop, Listing } = require("../../db/models");
const router = express.Router();

router.get("/:shopId", async (req, res) => {
	const { shopId } = req.params;
	console.log("shopId in the backend", shopId);
	const thisShop = await Shop.findByPk(Number(shopId), {
		include: [{ model: Listing }],
	});
	return res.json(thisShop);
});

module.exports = router;
