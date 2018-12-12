/**
 * module for seeding users with dummy test data
 * @module seeders/mongoose/usersTestSeeder
 *
 * @requires models/user
 */

/**
 * for seeding users with dummy test data
 * @param {string} docId document id
 */
const usersTestSeeder = async docId => {
	const User = require("../../models/user");
	const user = new User({
		_id: docId,
		username: "Holland",
		firstName: "Bags",
		lastName: "Bunny",
		email: "Holland@bunny.rabbit.com",
		password: "bad_pass",
		avatar: "no_avatar_sorry",
		userStatus: "1"
	});
	await user.save();
};

module.exports = usersTestSeeder;
