const express = require("express");
const router = express.Router();

const validationErrorsHandler = require("../../../middlewares/errorHandlers/validationErrorsHandler");

const {
	createUsersValidator,
	getUsersValidator,
	updateUsersValidator,
	deleteUsersValidator
} = require("../../../middlewares/validationHandlers/users");

const {
	getUsersAction,
	getAllUsersAction,
	createUsersAction,
	updateUsersAction,
	deleteUsersAction
} = require("../../../actions/v1/users");

router.post(
	"/",
	createUsersValidator,
	validationErrorsHandler,
	createUsersAction
);

router.get("/", getAllUsersAction);

router.get(
	"/:userId",
	getUsersValidator,
	validationErrorsHandler,
	getUsersAction
);

router.patch(
	"/:userId",
	updateUsersValidator,
	validationErrorsHandler,
	updateUsersAction
);

router.delete(
	"/:userId",
	deleteUsersValidator,
	validationErrorsHandler,
	deleteUsersAction
);

module.exports = router;
