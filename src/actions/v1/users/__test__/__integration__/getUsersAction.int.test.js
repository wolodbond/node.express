const request = require("supertest");
require("dotenv").config();
const mongoDb = require("../../../../../initilizers/database_drivers/mongoose");
const usersTestSeeder = require("../../../../../seeders/mongoose/usersTestSeeder");

describe("integration GET /users/:userId", () => {
	let mongooseClient;
	let mongoDbName;

	let docId;
	let app;

	beforeAll(async () => {
		// dont forget dude! ones u created db connection db itself will be created automatically
		await mongoDb.initDbConnect();
		mongooseClient = mongoDb.getDbConnect();
		mongoDbName = mongoDb.getDbName();
		docId = new mongooseClient.Types.ObjectId();

		await usersTestSeeder(docId);
		app = require("../../../../../app");
	});

	afterAll(async () => {
		try {
			await mongooseClient.connection.dropDatabase(mongoDbName);
			await mongoDb.closeDbConnect();
		} catch (error) {
			console.log(`
			afterAll You did something wrong dude!
			${error}
		`);
			throw error;
		}
	});

	it("GET user by id", () => {
		return request(app)
			.get(`/api/v1/users/${docId}`)
			.then(response => {
				expect(response.headers["content-type"]).toMatch(/json/);
				expect(response.statusCode).toBe(200);
				expect(response.body.username).toBe("Holland");
			});
	});
});
