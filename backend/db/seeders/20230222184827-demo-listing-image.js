"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = "ListingImages";
		return queryInterface.bulkInsert(
			options,
			[
				{
					listingId: 1,
					url: "https://images.reverb.com/image/upload/s--r6tmGvz6--/t_card-square/v1676983332/vrehu4l9iux9989ofrpb.jpg",
					preview: true,
				},
				{
					listingId: 2,
					url: "https://www.saxquest.com/uploads/images/products/product_detail/16344214963MarkVITen%20(2).jpg",
					preview: true,
				},
				{
					listingId: 3,
					url: "https://images.reverb.com/image/upload/s--T-24TtXY--/a_0/f_auto,t_large/v1632175447/o6zpk4fj9n5zx4bi6tmv.jpg",
					preview: true,
				},
				{
					listingId: 4,
					url: "https://images.reverb.com/image/upload/s--xvGULD0L--/t_card-square/v1656731162/yhof8ccfcijzvj3irtpt.jpg",
					preview: true,
				},
				{
					listingId: 5,
					url: "https://images.reverb.com/image/upload/s--kMwqHbY3--/a_270/f_auto,t_large/v1676847889/efodmupwaluqfyf8yfmn.jpg",
					preview: true,
				},
				{
					listingId: 6,
					url: "https://images.reverb.com/image/upload/s--I5kE-_QS--/a_0/f_auto,t_large/v1677338582/wc2nrczn1v4gpumnhu4k.jpg",
					preview: true,
				},
				{
					listingId: 7,
					url: "https://www.saxquest.com/uploads/images/products/product_detail/16229121361MarkVISop%20(2).jpg",
					preview: true,
				},
				{
					listingId: 8,
					url: "https://images.reverb.com/image/upload/s--cpyQrJea--/a_0/f_auto,t_large/v1675712871/srb6y1njnu9uwd5az3qd.jpg",
					preview: true,
				},
				{
					listingId: 9,
					url: "https://images.reverb.com/image/upload/s--1yHJcamo--/a_0/f_auto,t_large/v1667420165/eqmoczmyerngppxbw10s.jpg",
					preview: true,
				},
				{
					listingId: 9,
					url: "https://images.reverb.com/image/upload/s--uBcXy6IY--/a_0/f_auto,t_large/v1667420142/wfsobqaeuclc4bcuua96.jpg",
					preview: true,
				},
				{
					listingId: 10,
					url: "https://images.reverb.com/image/upload/s--P6x9D66H--/a_0/f_auto,t_large/v1677133348/eajfemmt4tefwen9iknr.jpg",
					preview: true,
				},
				{
					listingId: 10,
					url: "https://images.reverb.com/image/upload/s--CgwcpY0i--/a_0/f_auto,t_large/v1677133545/nwtdttnxf9qf64vk49bj.jpg",
					preview: true,
				},
				{
					listingId: 11,
					url: "https://images.reverb.com/image/upload/s--jewtpro4--/c_crop,h_1.000,w_0.750,x_0.195,y_0.000/f_auto,t_large/v1537880520/j13gfomicvipdahpvn21.jpg",
					preview: true,
				},
				{
					listingId: 11,
					url: "https://images.reverb.com/image/upload/s--PyuOnSTv--/c_crop,h_1.000,w_0.750,x_0.137,y_0.000/f_auto,t_large/v1537880532/nywjhbxwjewwfl8lambc.jpg",
					preview: true,
				},
				{
					listingId: 11,
					url: "https://images.reverb.com/image/upload/s--lMcBAd-D--/f_auto,t_large/v1537881106/u9lcaljtdueofnav1oow.jpg",
					preview: true,
				},
				{
					listingId: 12,
					url: "https://images.reverb.com/image/upload/s--lmXojzPN--/f_auto,t_large/v1431115400/nqjhgluooxepjtur41bp.jpg",
					preview: true,
				},
				{
					listingId: 12,
					url: "https://images.reverb.com/image/upload/s--uWizYl7U--/f_auto,t_large/v1431115391/h18rwyqbtl4dtjcis5kl.jpg",
					preview: true,
				},
				{
					listingId: 13,
					url: "https://images.reverb.com/image/upload/s--MPOzTTjh--/a_0/f_auto,t_large/v1677986793/cwt9giq3f6imsss6coiu.jpg",
					preview: true,
				},
				{
					listingId: 13,
					url: "https://images.reverb.com/image/upload/s--fPSgyls7--/a_0/f_auto,t_large/v1677986804/f0my7zh73e9fmehu8o7d.jpg",
					preview: true,
				},
				{
					listingId: 14,
					url: "https://images.reverb.com/image/upload/s--pK9poUrK--/a_0/f_auto,t_large/v1677815736/d9vp1es97jm1ucv5vfkx.jpg",
					preview: true,
				},
				{
					listingId: 14,
					url: "https://images.reverb.com/image/upload/s--PK0O25Xk--/a_0/f_auto,t_large/v1677815736/jyafqfhzjqqzvpabebwd.jpg",
					preview: true,
				},
				{
					listingId: 15,
					url: "https://images.reverb.com/image/upload/s--yeqMZNHR--/f_auto,t_large/v1668557873/ngwbpeucr5upzpsrpldp.jpg",
					preview: true,
				},
				{
					listingId: 15,
					url: "https://images.reverb.com/image/upload/s--ZAxTydFx--/f_auto,t_large/v1668557877/ym2tozqpzhsqxzvtv78a.jpg",
					preview: true,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = "ListingImages";
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				listingId: {
					[Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
				},
			},
			{}
		);
	},
};
