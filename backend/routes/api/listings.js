const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Listing, ListingImage, Shop } = require("../../db/models");
const { validateCreateListing } = require("../../utils/validators");
const {
	multipleMulterUpload,
	multiplePublicFileUpload,
} = require("../../awsS3");
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
		// const lastPreviewImg = previewUrl[previewUrl.length - 1];
		const firstImg = previewUrl[0];
		if (previewUrl.length) {
			// listing.PreviewImage = lastPreviewImg.url;
			listing.PreviewImage = firstImg.url;
		} else {
			listing.PreviewImage = "N/A";
		}
		payload.push(listing);
	}
	return res.json({ Listings: payload });
});
//get listing details
router.get("/:listingId", async (req, res) => {
	const listingId = Number(req.params.listingId);
	let specificListing = await Listing.findByPk(listingId, {
		include: [
			{
				model: ListingImage,
			},
			{
				model: Shop,
			},
		],
	});
	specificListing = specificListing.toJSON();
	return res.json(specificListing);
	// console.log("BACKEND: gettting listing DETAILS", specificListing.toJSON());
	//give back all images (to show in the component)
});

//create listing
router.post("/new", requireAuth, validateCreateListing, async (req, res) => {
	// console.log("BACKEND: REQUEST BODY", req.body);
	const {
		brandName,
		model,
		year,
		originCountry,
		category,
		listingTitle,
		condition,
		description,
		localPickUp,
		returnPolicy,
		shippingCost,
		listingPrice,
		acceptOffers,
	} = req.body;
	const currUserShop = await Shop.findOne({ where: { userId: req.user.id } });
	console.log(currUserShop);
	const newListing = await Listing.create({
		shopId: currUserShop.id,
		brandName,
		model,
		year,
		originCountry,
		category,
		listingTitle,
		condition,
		description,
		localPickUp,
		returnPolicy,
		shippingCost,
		listingPrice,
		acceptOffers,
	});
	return res.json(newListing);
});
//add listing Image
router.post(
	"/:listingId/images",
	requireAuth,
	multipleMulterUpload("images"),
	async (req, res) => {
		const { listingId } = req.params;
		// const specificListing = await Listing.findByPk(listingId);
		console.log("BACKEND POST LISTING IMAGES!!!!!!!", req.files);
		const awsUploadedFiles = await multiplePublicFileUpload(req.files);
		console.log("AWS UPLOADED FILES", awsUploadedFiles);
		const newListingImages = [];
		for (let awsFile of awsUploadedFiles) {
			const newImage = await ListingImage.create({
				listingId: Number(listingId),
				url: awsFile,
				preview: true,
			});
			newListingImages.push(newImage);
		}
		console.log("BEFORE RES.json-----", newListingImages);
		return res.json(newListingImages);
		// return res.json(newListingImages);
		// const { url, preview } = req.body;
		// const newListingImg = await ListingImage.create({
		// 	listingId: Number(listingId),
		// 	url,
		// 	preview,
		// });
	}
);
//edit listing
router.put(
	"/:listingId/edit",
	requireAuth,
	validateCreateListing,
	async (req, res) => {
		const { listingId } = req.params;
		const {
			brandName,
			model,
			year,
			originCountry,
			category,
			listingTitle,
			condition,
			description,
			localPickUp,
			returnPolicy,
			shippingCost,
			listingPrice,
			acceptOffers,
		} = req.body;
		const specificListing = await Listing.findByPk(Number(listingId));
		const updatedListing = await specificListing.update({
			brandName,
			model,
			year,
			originCountry,
			category,
			listingTitle,
			condition,
			description,
			localPickUp,
			returnPolicy,
			shippingCost,
			listingPrice,
			acceptOffers,
		});
		// console.log("IN THE BACKEND");
		return res.json(updatedListing);
	}
);
//delete Listing
router.delete("/:listingId/delete", requireAuth, async (req, res) => {
	const { listingId } = req.params;
	const specificListing = await Listing.findByPk(Number(listingId));
	await specificListing.destroy();
	return res.json({
		message: "deleted",
		statusCode: 200,
	});
});

//filter listing by categories
router.get("/categories/:category", requireAuth, async (req, res) => {
	const { category } = req.params;
	const payload = [];
	const filteredListings = await Listing.findAll({
		where: {
			category: category,
		},
	});
	for (let listing of filteredListings) {
		listing = listing.toJSON();
		let previewUrl = await ListingImage.findAll({
			where: {
				listingId: listing.id,
				preview: true,
			},
		});
		const firstImg = previewUrl[0];
		listing.PreviewImage = firstImg.url;
		payload.push(listing);
	}
	return res.json({ FilteredListings: payload });
});

module.exports = router;
