// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const listingRouter = require("./listings.js");
const shopRouter = require("./shop.js");
const cartRouter = require("./carts.js");
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/listings", listingRouter);
router.use("/shop", shopRouter);
router.use("/cart", cartRouter);
//testing purposes in the browser
router.post("/test", (req, res) => {
	res.json({ requestBody: req.body });
});

module.exports = router;
