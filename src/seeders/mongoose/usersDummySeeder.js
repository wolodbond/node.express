/**
 * module for seeding users with dummy data
 * @module seeders/mongoose/usersDummySeeder
 *
 * @requires dotenv
 * @requires initilizers/database_drivers/mongoose
 * @requires faker
 * @requires models/user
 */
require("dotenv").config();
const mongoDb = require("../../initilizers/database_drivers/mongoose");
const faker = require("faker");

/**
 * seeding users with dummy data
 */
const usersDummySeeder = async (itemsAmount = 1) => {
	await mongoDb.initDbConnect();
	const mongooseClient = mongoDb.getDbConnect();
	const User = require("../../models/user");

	while (itemsAmount > 0) {
		itemsAmount = itemsAmount - 1;

		let docId = new mongooseClient.Types.ObjectId();

		const user = new User({
			_id: docId,
			username: faker.internet.userName(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			avatar: faker.image.avatar(),
			userStatus: "1"
		});
		const userResponse = user.save();
		userResponse
			.then(doc => {
				if (itemsAmount === 0) {
					mongoDb.closeDbConnect();
				}
			})
			.catch(err => {
				if (itemsAmount === 0) {
					mongoDb.closeDbConnect();
				}
			});
	}
};

module.exports = usersDummySeeder;
