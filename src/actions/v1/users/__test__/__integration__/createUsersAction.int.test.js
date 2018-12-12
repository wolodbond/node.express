const request = require("supertest");
require("dotenv").config();
const mongoDb = require("../../../../../initilizers/database_drivers/mongoose");

describe("integration POST /users", () => {
	let mongoDbName;

	let app;

	beforeAll(async () => {
		// dont forget dude! ones u created db connection db itself will be created automatically
		await mongoDb.initDbConnect();
		mongoDbName = mongoDb.getDbName();

		app = require("../../../../../app");
	});

	afterAll(async () => {
		try {
			const mongooseClient = mongoDb.getDbConnect();
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

	it("CREATE user", () => {
		return request(app)
			.post("/api/v1/users")
			.send({
				username: "Holland",
				firstName: "Bags",
				lastName: "Bunny",
				email: "Holland@bunny.rabbit.com",
				password: "password",
				userStatus: 1
			})
			.then(response => {
				expect(response.headers["content-type"]).toMatch(/json/);
				expect(response.statusCode).toBe(201);
				expect(response.body.username).toBe("Holland");
			});
	});
});
