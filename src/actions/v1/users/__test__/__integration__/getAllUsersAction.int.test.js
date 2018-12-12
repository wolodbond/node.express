const request = require("supertest");
require("dotenv").config();
const mongoDb = require("../../../../../initilizers/database_drivers/mongoose");
const usersTestSeeder = require("../../../../../seeders/mongoose/usersTestSeeder");

describe("integration GET /users", () => {
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

		//const port = appConfig["test"].app.port;
		//	var express = require("express");
		//app = express();
		//	server = http.createServer(app);
		//	await server.listen(port);
	});

	afterAll(async () => {
		try {
			await mongooseClient.connection.dropDatabase(mongoDbName);
			await mongoDb.closeDbConnect();
			//	await server.close();
		} catch (error) {
			console.log(`
			afterAll You did something wrong dude!
			${error}
		`);
			throw error;
		}
	});

	it("GET list of users", () => {
		return request(app)
			.get("/api/v1/users")
			.then(response => {
				expect(response.headers["content-type"]).toMatch(/json/);
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBeGreaterThanOrEqual(1);
			});
	});
	/*
  // move error handle to get user
  it('integration:: GET error 400 instead of users list', () => {
    request(app)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(response.code).toBe(400)
      .end((err, res) => {
        expect(res.body).toEqual({ error: 'Something wrong. Try again!' })
      })    
  })*/
});
